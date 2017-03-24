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
    let testNum = 0;

    while (true) {
      testNum += max;
      if (testNum % min === 0 && testNum % max === 0) {
        break;
      }
    }

    return testNum;
  }

  return lcmNum;

};


