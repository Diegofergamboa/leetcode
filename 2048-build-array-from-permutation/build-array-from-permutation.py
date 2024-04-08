from typing import List
class Solution:
    def buildArray(self, nums: List[int]) -> List[int]:
        ans = [nums[num] for num in nums]
        return ans