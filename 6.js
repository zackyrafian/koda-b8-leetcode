/**
 * 169. Majority Element
 Given an array nums of size n, return the majority element.
 
 The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 
 Example 1:
 
 Input: nums = [3,2,3]
 Output: 3
 Example 2:
 
 Input: nums = [2,2,1,1,1,2,2]
 Output: 2
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let mp = new Map(); 
    let n = nums.length; 

    for (let f of nums) { 
        mp.set(f, (mp.get(f) || 0) + 1); 
    }

    for (const [key, value] of mp) { 
        if (value > n / 2){ 
            return key;
        }
    }
    // let n = nums.length; 
    // for (let i = 0; i < n; i++) { 
    //     let c = 0; 
    //     for (let j = 0; j < n; j++) { 
    //         if (nums[i] === nums[j]) { 
    //             c++; 
    //         }
    //     }
    //     if (c > n / 2) { 
    //         return nums[i]; 
    //     }
    // }
    // return -1;
};