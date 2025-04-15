/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    var uniqueNums = [...new Set(nums)];
    
    // Sort the array
    var sortedNums = uniqueNums.sort((a, b) => a - b);
    var initial = sortedNums[0];
    var count = 0;


    console.log(sortedNums);

    for (var i = 0; i < sortedNums.length; i++) {
        console.log("initial", initial)
        console.log("nums[i]" , sortedNums[i])
        if (sortedNums[i] != initial ) {
            count++;
            initial = sortedNums[i] + 1
        } else {
            initial++;
        }
            
    }
    
    console.log(count);

    return count;
};

minOperations([8,5,9,9,8,4]);