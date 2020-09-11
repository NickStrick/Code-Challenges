
#https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/


class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        '''
        
        '''
        longest = []
        current = []
        i = 0
        while i < len(s):
            char = s[i]
            if char in current:
                for j in range(len(current)-1, -1, -1):
                    # print(j)
                    if current[j] == char:
                        # print('y', j)
                        current = current[j+1:]
                        # print(current)
                        break;
                
                
                    
                    
            current.append(str(char))
            if len(current) > len(longest): longest = current
            print(current, longest)
            i+=1
        
        return len(longest)