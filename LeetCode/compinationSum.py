# https://leetcode.com/problems/combination-sum/


class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        # sort candidates

        # loop from end of array to begining
            # loop until current solution sum == target
                # grab current candidate number
                # divide the target by the candidate
                # remove remainder, add candidate to current solution

        candidates.sort()

        solutionArray = []
        solutionSet = set()

        for i in range(len(candidates)-1, -1, -1):
            solutionSum = target
            currSolutionSet = []
            currCan = candidates[i]
            j = i
            print(i, j)
            while solutionSum > 0 or j >= 0:
                currCanIndex = candidates[j]
                addAmount = math.floor(solutionSum/currCanIndex)
                print(currCan, currCanIndex, 'addamount', addAmount, solutionSum)
                for x in range(addAmount-1, -1, -1):
                    print('for loop')
                    # add to currentsolution set
                    currSolutionSet.append(currCanIndex)
                    # remove value from solutionSum
                    solutionSum -= currCanIndex
                j -= 1
                if j < 0:
                    break

            setValue = 0
            if len(currSolutionSet) > 1:
                setValue = tuple(currSolutionSet)
            else:
                setValue = currSolutionSet[0]

            print('j', j, setValue, solutionSet)
            if j > -1:
                if tuple(currSolutionSet) not in solutionSet:
                    solutionSet.add(setValue)
                    solutionArray.append(currSolutionSet)
                    print('SOLUTION', solutionArray)

        return solutionArray
