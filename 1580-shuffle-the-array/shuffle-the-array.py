class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        new_output = []
        list_length = len(nums)
        first_list = nums[0:n]
        second_list = nums[n:list_length]
        min_length = min(len(first_list), len(second_list))
        
        for i in range(min_length):
            new_item_first_list = first_list[i]
            new_item_second_list = second_list[i]
            new_output.append(new_item_first_list)
            new_output.append(new_item_second_list)
        
        return new_output   