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

/*  // the slow way
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

  return testNum;*/

  // the faster way
  let testNum = 0;
  let lcmNum = 1;

  for (var i = 2; i < ceiling; i++) {
    lcmNum = lcm(lcmNum, i);
  }

  function lcm(min, max) {
    let gcdNum = gcd(min, max);

    return Math.abs(min * max) / gcdNum;
  }

  function gcd(min, max) {

    let divisor = 0;

    while (min % 2 === 0 && max % 2 === 0) {
      divisor++;
      min /= 2;
      max /= 2;
    }

    while (min !== max) {
      if (min % 2 === 0) {
        min /= 2;
      }
      else if (max % 2 === 0) {
        max /= 2;
      }
      else if (min > max) {
        min = (min - max)/2;
      } else {
        max = (max - min)/2;
      }
    }
    return min * Math.pow(2, divisor);

  }

  return lcmNum;

};
