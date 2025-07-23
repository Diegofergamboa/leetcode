class Solution(object):
    def convertTemperature(self, celsius):
        """
        :type celsius: float
        :rtype: List[float]
        """
        k = celsius + 273.15
        f = (celsius * (9.0/5.0)) + 32
        return [k, f]