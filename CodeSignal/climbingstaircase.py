def climbingStaircase(n, k):
    answer = []


​
   if n < 0:
        return answer
    if n == 0:
        answer.append([])
        return answer
​
   for i in range(1, k + 1):
        for seq in climbingStaircase(n - i, k):
            answer.append([i] + seq)
​
   return answer
