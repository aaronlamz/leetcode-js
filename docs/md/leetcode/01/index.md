# 1、Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

### Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

### Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

### Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

### Constraints:
2 <= nums.length <= 10^9
-10^9 <= nums[i] <= 10^9
-10^9 <= target <= 10^9
Only one valid answer exists.

### Follow-up
Can you come up with an algorithm that is less than O(n^2) time complexity?

### Solution
 O(n2) time complexity

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  if (!Array.isArray(nums) || typeof target !== 'number'){
    return
  }
  if (nums.length < 2 || nums.length > 10**9){
    return
  }
  var result = []
  for (let i = 0; i < nums.length; i++){
    for(let j = i+1; j < nums.length; j++){
        if(typeof nums[i] !== 'number' || typeof nums[j] !== 'number'){
          return
        }
        if (nums[i] < (-10)**9 || nums[i] > 10**9){
          return
        }
        if (nums[j] < (-10)**9 || nums[j] > 10**9){
          return
        }
        if(nums[i] + nums[j] === target){
          result  = [i,j]
          break
        }
    }
  }
  return result
};
```
