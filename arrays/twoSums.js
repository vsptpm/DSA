/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const hash = {}
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if (hash[nums[i]]) {
            return ([hash[nums[i]].index, i])
        } else {
            hash[diff] = { index: i, value: nums[i] }
        }
    }
};