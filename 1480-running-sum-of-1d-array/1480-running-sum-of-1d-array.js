/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let runningSumArray = [];
    let currentNumber = nums[0];

    for (let i = 0; i < nums.length; i++) {
      if (i > 0) {
        currentNumber += nums[i];
      }
      runningSumArray.push(currentNumber);
    }
    
    return runningSumArray
};