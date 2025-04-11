/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
        let dp = {}
        let arr = []
    
    
        for (let num of nums) {
            if (!dp[num]) {
                dp[num] = true
                arr.push(num)
            }
        }

        return arr;
    };

removeDuplicates([1,1,2])


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
        if (nums.length === 0) return 0;
    
        let k = 1; // first element is always unique
    
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] !== nums[k - 1]) {
                nums[k] = nums[i];
                k++;
            }
        }
    
        return k; // number of unique elements
    };
    
