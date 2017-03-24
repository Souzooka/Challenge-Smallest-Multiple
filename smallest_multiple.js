/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function( ceiling ) {
  // do work here

  // the slow way
  let testNum = 0;
  let divisionTest = true;
  while (true) {
    divisionTest = true;
    testNum += ceiling;

    for (let i = 2; i < ceiling; i++) {
      if (testNum % i !== 0) {
        divisionTest = false;
        break;
      }
    }

    if (divisionTest) {
      break;
    }
  }

  return testNum;
};