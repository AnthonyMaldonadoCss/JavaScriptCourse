'use strict';

//PROBLEM

/**
 *   We work for a company building a smart home thermometer. Our most recent task this:
 * "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind
 *  that sometimes there migth be a sensor error".
 */

/**
 *1) understanding the problem;
 What is temp amplitude? Answer: difference between highest and lowest temp

 */
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temp1 = [5, 6, 7, 5, 2, 100, -5];

const calcMinMax = function (temp) {
  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    let curTem = temp[i];

    if (typeof curTem !== 'number') continue;

    if (curTem > max) max = curTem;
    if (curTem < min) min = curTem;
  }
  console.log(max, min);

  return max - min;
};

const amplitude = calcMinMax(temperatures);
console.log(amplitude);
// PROBLEM 2:
// Functions should now recieve 2 arrays of temperatures

const calcMinMaxNew = function (t1, t2) {
  const temp = t1.concat(t2);

  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    let curTem = temp[i];

    if (typeof curTem !== 'number') continue;

    if (curTem > max) max = curTem;
    if (curTem < min) min = curTem;
  }
  console.log(max, min);

  return max - min;
};
const amplitudeNew = calcMinMaxNew(temperatures, temp1);
console.log(amplitudeNew);
