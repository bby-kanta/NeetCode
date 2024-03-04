/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let answer = [];

    for(let i = 0; i < nums.length; i++) {
        for(let n = i+1; n < nums.length; n++) {
            if (nums[i] + nums[n] == target) {
                answer.push(i, n)
            }
        }
    }

    return answer;
};

/**
 * 模範解答
 */
var modelAnswer = function(nums, target) {
    const numberMap = new Map()

    for (let i = 0; i < nums.length; i++) {
        const number = nums[i]

        const difference = target - number

        if (numberMap.has(difference)) return [numberMap.get(difference), i]
        numberMap.set(number, i)
    }
}