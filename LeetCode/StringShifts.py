# https://leetcode.com/explore/other/card/30-day-leetcoding-challenge/529/week-2/3299/


def stringShift(self, s: str, shift: List[List[int]]) -> str:

    for command in shift:
        for x in range(command[1]):
            print(command[0])

            if command[0] == 0:
                i = s[0]
                s = s[1:]
                s += i
            else:
                i = s[len(s)-1]
                s = s[:-1]
                i += s
                s = i
    return s
