class Solution:
    def findWordsContaining(self, words: List[str], x: str) -> List[int]:
        ans = []
        
        for index, word in enumerate(words):
            word = word.rstrip()
            if x in word:
                ans.append(index)
        return ans

        