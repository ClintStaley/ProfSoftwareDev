class Date {
   static monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
   day;    // 0-based day
   month;  // 0-based month (i.e. 0-11)
   year;   // 1-based year (e.g. 2021 as of now)
   logger; // Logger to be called with new date value on each change

   constructor(day, month, year, logger) {
      this.day = day;
      this.month = month;
      this.year = year;
      this.logger = logger;
      this.adjustFeb();
   }

   // Advance date by one day and log result in US numerical date form.
   bump() {
      this.day++;
      if (this.day === Date.monthDays[this.month]) {
         this.month++
         this.day = 0;
      }
      if (this.month === 12) {
         this.year++;
         this.month = 0;
         this.adjustFeb();
      }
      this.logger(`${this.month+1}/${this.day+1}/${this.year}`);
   }

   // Adjust month length to accomodate leap years per Gregorian rules:
   // every fourth year except century years unless the century number is also
   // divisible by 4.
   adjustFeb() {
      if (this.year % 4 === 0
       && (this.year % 100 > 0 || this.year/100 % 4 === 0))
         Date.monthDays[1] = 29;
      else
         Date.monthDays[1] = 28;
   }
}

module.exports = Date;