const Date = require("../Date");
const expect = require("chai").expect;

var logger = log => {logger.lastLog = log;}

describe("Date checks", function() {
   it("should handle routine days"), function() {
      let date = new Date(1, 1, 2000, logger);
      
      date.bump();
      expect(logger.lastLog).to.equal("2/3/2000");
   }

   it("should handle year-end logic", function() {
      let date = new Date(30, 11, 2000, logger);
      
      date.bump();
      expect(date.day).to.equal(0);
      expect(date.month).to.equal(0);
      expect(date.year).to.equal(2001);
      expect(logger.lastLog).to.equal('1/1/2001');
   });

   it ("should handle leap years", function() {
      let date = new Date(27, 1, 2000, logger);
      
      date.bump();
      expect(logger.lastLog).to.equal("2/29/2000");
      date.bump();
      expect(logger.lastLog).to.equal("3/1/2000");
   });
});
