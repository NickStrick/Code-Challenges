# https://www.hackerrank.com/challenges/ctci-big-o/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=miscellaneous


def primality(n):

  # divide number by itself, if it has no remainder, it's prime
  # even numbers can't be prime
  # how many numbers do we need to check to ensure n is prime?
  # let's just check every number from 2 to n - 1, and if any of
  # those divide n, then it's not prime
​
# we can achieve O(n^(1/2)) runtime
# we don't need to check anything past n^(1/2)
# it's a number that definitely divides n, but in a lot of cases,
# the square root won't be an integer
