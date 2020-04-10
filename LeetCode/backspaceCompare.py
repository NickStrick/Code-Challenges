# https://leetcode.com/explore/other/card/30-day-leetcoding-challenge/529/week-2/3291/
# https://repl.it/@Nstricker/PeacefulCraftyGenerics


def backspaceCompare(S: str, T: str) -> bool:

    # strObj = strObj[0 : 5 : ] + strObj[5 + 1 : :]

    def backspace(string, i):
        string = string[:i-1] + string[i+1:]
        print(string)
        return string

    index = S.find('#')
    S = backspace(S)
    print(S.find('#'), S)
