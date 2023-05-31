// Find leap Year Condition

// A year must be divisible by 4 to be a leap year.
// If a year is divisible by 100, it is not a leap year, unless...
// If a year is divisible by 400, then it is a leap year.


function findLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}


console.log(findLeapYear(2008));



//Simplified version

// function findLeapYear(year) {
//   if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// }
