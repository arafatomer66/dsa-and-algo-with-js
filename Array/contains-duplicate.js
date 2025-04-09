/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
        var a = {}
    
        for(var i = 0; i < nums.length; i++) {
            if (!a[nums[i]]) {
                a[nums[i]] = true
            } else {
                return true;
            }
        }
    
        return false;
    };