class Solution:
    def finalValueAfterOperations(self, operations: List[str]) -> int:
        X = 0
        methods = ['++X', 'X++', '--X', 'X--']
        should_continue = any(method in operations for method in methods)

        if should_continue:
            for operator in operations:
                if '--' in operator:
                    X -= 1
                elif '++' in operator:
                    X += 1
            return X
        else:
            print('Invalid property')
            