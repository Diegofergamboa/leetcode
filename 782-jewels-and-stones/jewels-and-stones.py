class Solution(object):
    def numJewelsInStones(self, jewels, stones):
        """
        :type jewels: str
        :type stones: str
        :rtype: int
        """
        coincidences_counter = 0
        pointer = len(stones) - 1

        jewelsList = list(jewels)
        stoneslist = list(stones)


        while pointer >= 0:
            if stoneslist[pointer] in jewelsList:
                coincidences_counter += 1

            pointer -= 1

        return coincidences_counter