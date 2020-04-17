# https://leetcode.com/explore/other/card/30-day-leetcoding-challenge/529/week-2/3297/


def lastStoneWeight(self, stones: List[int]) -> int:

    while len(stones) > 1:
        stones.sort(reverse=True)

        y = stones[0]
        x = stones[1]
        stones.remove(y)
        stones.remove(x)

        new = y-x
        if new:
            stones.append(new)

    return stones[0]


print(lastStoneWeight([2, 7, 4, 1, 8, 1]))  # 1
