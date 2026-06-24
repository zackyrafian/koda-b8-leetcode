/**
 * 229. Majority Element II
 * Medium
 * Given an integer array of size n, find all elements that appear more than ⌊n / 3⌋ times.
 
  
 
 Example 1:
 
 Input: nums = [3,2,3]
 Output: [3]
 Example 2:
 
 Input: nums = [1]
 Output: [1]
 Example 3:
 
 Input: nums = [1,2]
 Output: [1,2]
  
 
 Constraints:
 
 1 <= nums.length <= 5 * 104
 -109 <= nums[i] <= 109
 */



/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let n = nums.length;
    let b = [];
    let mp = new Map(); 
    for (let f of nums) { 
        mp.set(f, (mp.get(f) || 0) + 1); 
    }

    for (const [key, value] of mp) { 
        if (value > n / 3) { 
            b.push(key)
        }
    }
    return b; 
};