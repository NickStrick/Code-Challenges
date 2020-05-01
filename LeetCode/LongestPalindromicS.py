# https://leetcode.com/problems/longest-palindromic-substring/


def longestPalindrome(self, s: str) -> str:
    n = len(s)
    table = [[0 for x in range(n)] for y in range(n)]
    print(table)

    # All substrings of length 1 are palindrones
    maxLength = 1
    i = 0
    while (i < n):
        table[i][i] = True
        i = i + 1

    # check for sub-string of length 2.
    start = 0
    i = 0
    while i < n - 1:
        if (s[i] == s[i + 1]):
            table[i][i + 1] = True
            start = i
            maxLength = 2
        i = i + 1

    # Check for lengths greater than 2.
    # k is length of substring
    k = 3
    while k <= n:
        # Fix the starting index
        i = 0
        while i < (n - k + 1):

            # Get the ending index of
            # substring from starting
            # index i and length k
            j = i + k - 1

            # checking for sub-string from
            # ith index to jth index iff
            # st[i+1] to st[(j-1)] is a
            # palindrome
            if (table[i + 1][j - 1] and s[i] == s[j]):
                table[i][j] = True

                if (k > maxLength):
                    start = i
                    maxLength = k
            i = i + 1
        k = k + 1
    print(s[start:start+maxLength])
    return s[start:start+maxLength]


longestPalindrome("babad")
longestPalindrome("cbbd")
