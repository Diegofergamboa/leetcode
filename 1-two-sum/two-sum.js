/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const numsWithIndices = nums.map((num, index) => ({ num, index }))
    numsWithIndices.sort((a, b) => a.num - b.num)

    let left = 0
    let right = numsWithIndices.length - 1;

    while (left < right) {
        const sum = numsWithIndices[left].num + numsWithIndices[right].num;

        if (sum === target) {
            return [numsWithIndices[left].index, numsWithIndices[right].index];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    throw new Error('Solution not found');

}