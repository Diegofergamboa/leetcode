class Solution(object):
    def numJewelsInStones(self, jewels, stones):
        """
        :type jewels: str
        :type stones: str
        :rtype: int
        """
        count = {}
        jewels_in_stones = 0

        for letter in stones:
            count[letter] = count.get(letter, 0) + 1


        for jewel in jewels:
            if count.get(jewel):
                jewels_in_stones += count[jewel]

        return jewels_in_stones