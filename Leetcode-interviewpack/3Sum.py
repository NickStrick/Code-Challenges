#https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/776/

class Solution(object):
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
#             # if we have a fixed value we go through the list 
#             # and add the current list to see if its adversary is in the set
#   
        visited = {}

        # set up visited dictionary
        for num in nums:
            num = str(num)
            if num in visited:
                visited[num] = visited[num] + 1
            else:
                visited[num] = 1
        
        solution_set = set()
        
        # main loop
        for first_num in visited:
            current_visited = copy.copy(visited)
            current_visited[str(first_num)] -= 1
            if current_visited[str(first_num)] < 1: del current_visited[str(first_num)]
                
            # print(current_visited)

            for second_num in list(current_visited.keys()):
                current_visited[str(second_num)] -= 1
                if current_visited[str(second_num)] < 1: del current_visited[str(second_num)]
                    
                third_num = -(int(first_num) + int(second_num))
                print(first_num, second_num, third_num)
                
                # check if third num in visited
                if str(third_num) in current_visited and current_visited[str(third_num)] > 0:
                    current_visited[str(third_num)] -= 1
                    # if current_visited
                    first_num = int(first_num)
                    second_num = int(second_num)

                    # add to solution set
                    curr_sol_lst =[first_num, second_num, third_num]
                    curr_sol_lst.sort()
                    curr_sol_lst = tuple(curr_sol_lst)
                    if curr_sol_lst not in solution_set: 
                        solution_set.add(curr_sol_lst)
        
        return [list(awnser) for awnser in solution_set]

input = [-1,0,1,2,-1,-4]