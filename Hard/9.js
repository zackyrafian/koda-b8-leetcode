/**
 * 4. Median of Two Sorted Arrays
 * Hard
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 
 The overall run time complexity should be O(log (m+n)).
 
 Example 1:
 
 Input: nums1 = [1,3], nums2 = [2]
 Output: 2.00000
 Explanation: merged array = [1,2,3] and median is 2.
 Example 2:
 
 Input: nums1 = [1,2], nums2 = [3,4]
 Output: 2.50000
 Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
  
 
 Constraints:
 
 nums1.length == m
 nums2.length == n
 0 <= m <= 1000
 0 <= n <= 1000
 1 <= m + n <= 2000
 -106 <= nums1[i], nums2[i] <= 106
 */


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // if (nums2.length === 0) return nums1[0];
    // if (nums1.length === 0) return nums2[0];
    // // console.log(nums1.length)
    // // console.log(nums2.length)
    let vec = nums1.concat(nums2).sort((a, b) => a - b); 
    console.log(vec.length); 
    console.log(vec)
    let l = 0, r = vec.length - 1;
    if (vec.length % 2 !== 0) {
        let mid = Math.round((vec.length) / 2);
        console.log(mid);
        return Math.round(vec[mid - 1]);
    }
    let mid = vec[((r + 1) / 2)] + vec[(Math.abs(l - r + 1) / 2)];
    return(mid / 2)
};