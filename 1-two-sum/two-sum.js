/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (map[diff] !== undefined) {
            return [map[diff], i];
        }
        map[nums[i]] = i; // Store the index of the current number
    }
    return []; // Return an empty array if no solution is found
};

// Example usage
console.log(twoSum([1, 2, 3, 5], 6)); // Output: [1, 2]
