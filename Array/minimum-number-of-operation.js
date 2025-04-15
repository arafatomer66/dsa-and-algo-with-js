/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    // Remove duplicates to consider unique elements
    nums = [...new Set(nums)];
    
    // Sort the array
    nums.sort((a, b) => a - b);
    
    let n = nums.length;
    let maxLength = 0;
    
    // Sliding window approach to find the largest consecutive subsequence
    for (let i = 0; i < n; i++) {
        let j = i;
        
        // Expand the window while the difference between elements is valid (<= n-1)
        while (j < n && nums[j] - nums[i] <= n - 1) {
            j++;
        }
        
        // Update the maxLength of consecutive numbers
        maxLength = Math.max(maxLength, j - i);
    }

    // The result is the total length minus the largest consecutive subsequence length
    return n - maxLength;
};

// Example Usage
console.log(minOperations([8, 5, 9, 9, 8, 4])); // Output: 2


minOperations([1,2,3,5,6]);