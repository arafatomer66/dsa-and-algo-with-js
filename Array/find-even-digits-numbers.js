/**
 * @param {number[]} nums
 * @return {number}
 */

var findNumbers = function (nums) {
  let count = 0;

  for (let num of nums) {
    let digitCount = 0;
    let n = num;

    if (num === 0) {
      digitCount = 1;
    } else {
      while (n > 0) {
        // removing last digital
        // 555 --> 550 ---> 55

        num = num - (num % 10);
        num = num / 10;
        digitCount++;
      }
    }

    if (digitCount % 2 === 0) {
      count++;
    }
  }

  return count;
};
