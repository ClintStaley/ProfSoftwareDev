const Validator = require("../Routes/Validator");
const expect = require("chai").expect;

class MockSession {
   prsId;  // User id of this session

   constructor(prsId) {
      this.prsId = prsId;
   }

   isAdmin() {return this.prsId === 0;}
}

class MockResponse {
   statusSet;  // Status set by calling
   ended;      // Has "end" been called?
   body;       // body object passed to json method

   status(s) {this.statusSet = s; return this;}
   end()     {this.ended = true;}
   json(b)   {this.body = b; this.ended = true;}
}

describe("Admin checks", function() {
   before(function() {
      this.nonAdminId = 42;
      this.ssn = new MockSession(0);
      this.res = new MockResponse()
      this.vld = new Validator({session: this.ssn}, this.res);
   });

   it("should pass checkPrsOK", function() {
      expect(this.vld.checkPrsOK(this.nonAdminId)).to.be.true;
      expect(this.vld.errors).to.be.empty;
      expect(this.res.ended).to.be.undefined;
      expect(this.res.statusSet).to.be.undefined;
   });

   it ("should pass checkAdmin", function() {
      expect(this.vld.checkAdmin()).to.be.true;
      expect(this.vld.errors).to.be.empty;
   });  
});

describe("Terminating checks", function() {
   before(function() {
      this.Tags = Validator.Tags;
      this.prsId = 1;
      this.ssn = new MockSession(this.prsId);
      this.cb = (err) => {this.err = err};
   });
   
   beforeEach(function() {
      this.res = new MockResponse();
      this.vld = new Validator({session: this.ssn}, this.res);
      delete this.err;
   });

   it("chains and checks w/cb", function() {
      let ok = this.vld.chain(false, [this.Tags.badValue, "badField"])
       .chain(false, this.Tags.noOldPwd)
       .check(false, this.Tags.invalidPrms, this.cb);

      expect(ok).to.be.false;
      expect(this.res.statusSet).to.equal(400);
      expect(this.res.body).to.be.an('array').with.length(3);
      expect(this.res.body).to.have.deep.members(
         [{tag: "badValue", params: ["badField"]},
          {tag: "noOldPwd", params: null},
          {tag: "invalidPrms", params: null}
         ]
      )
      expect(this.res.ended).to.be.true;
      expect(this.err).to.not.be.undefined;
   });

   it("checks array-described errors w/o cb", function(){
      let ok = this.vld.check(false, [this.Tags.badValue, "badField"]);

      expect(ok).to.be.false;
      expect(this.res.body).to.have.deep.members(
         [{tag: "badValue", params: ["badField"]}]
      );
      expect(this.res.ended).to.be.true;
   });

   it("correctly checks field lengths", function() {
      let testObj = {a: "xx", b: "yyyy", c: null, d: 42}
      let ok = this.vld.checkFieldLengths(testObj, Object.keys(testObj),
       [4, 3, 0, 10]).check(true);

      expect(ok).to.be.false;
      expect(this.res.body).to.have.deep.members(
         [{tag: "badValue", params: ["b"]}, 
          {tag: "badValue", params: ["d"]}
         ]
      );
      expect(this.res.ended).to.be.true;
   });

   it("sends no-permission status", function() {
      let ok = this.vld.check(false, this.Tags.noPermission, this.cb);

      expect(this.res.body).to.be.undefined;
      expect(this.res.statusSet).to.equal(403);
      expect(this.res.ended).to.be.true;
      expect(this.err).to.not.be.undefined;
   });

   it("sends not-found status", function() {
      let ok = this.vld.check(false, this.Tags.notFound, this.cb);

      expect(this.res.body).to.be.undefined;
      expect(this.res.statusSet).to.equal(404);
      expect(this.res.ended).to.be.true;
      expect(this.err).to.not.be.undefined;
   });

   it("checks expected and unexpected fields", function() {
      let testObj = {a: "xx", b: "yyyy", c: null, d: ""}
 
      let ok = this.vld.hasOnlyFields(testObj, ["a", "b"])
       .hasFields(testObj, ["a", "c", "d"]);

      expect(ok).to.be.false;
      expect(this.res.body).to.have.deep.members([
         {tag: this.Tags.forbiddenField, params:["c"]},
         {tag: this.Tags.forbiddenField, params:["d"]},
         {tag: this.Tags.missingField, params:["c"]},
         {tag: this.Tags.missingField, params:["d"]},
      ]);
   });

   it("covers odd cases in checkPrsOK", function() {
      let ok = this.vld.checkPrsOK(this.prsId);
      expect(ok).to.be.true;

      let noSessionOK = new Validator({}, this.res).checkPrsOK(0);
      expect(noSessionOK).to.be.false;
      expect(this.res.statusSet).to.equal(403);
   });

   it("blocks repeated checks", function() {
      this.vld.check(false, this.Tags.noOldPwd);
      this.vld.check(false, this.Tags.notFound);

      expect(this.res.statusSet).to.equal(400);  // NOT 404
   })
});