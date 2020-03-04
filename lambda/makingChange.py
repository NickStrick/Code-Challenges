# https://youtu.be/Y-mw0ECMAOw


class Solution:
    def naive_change(self, amount: int, coins: List[int], cache) -> int:
        # base cases
        # if there's a negative, we can't make change for that
        if amount < 0:
            cache[amount] = 0
            return 0
        # there's one way to make 0 cents
        if amount == 0:
            return 1

        # if we only had one coin
        if len(coins) == 1:
            # we'd only have to check if the amount % coin == 0
            if coins[0] % amount == 0 and coins[0] < amount:
                return 1

        # if we have no coins and amount > 0
        if len(coins) == 0 and amount > 0:
            # there's no way to satisfy this; return 0
            return 0

        # if amount == any of the coin denominations
        # then that's one combination right there
        # subtract the coin from the amount

        # if we don't currently fall within any of these bases cases, how do we get to one of them?
        # amount = 5, coins = [1, 2, 5]

        # take the latest coin and subtract it from amount

        # we only ever took the last coin into account

        cache[amount] = self.change(
            amount - coins[-1], coins, cache) + self.change(amount, coins[:-1], cache)

        return cache[amount]

    def change(self, amount: int, coins: List[int], cache=None) -> int:
        # caching to save answers we've already computed
        # need some kind of data structure that we use as a cache

        # what is our cache actually going to hold?
        # want our cache to have fast look-up and insertion
        # hash tables
        # anytime we get an answer or a return statement, stick in the cache
        # key: amount, value: number of ways to make that in change

        # we know the answer for 0 for sure, since there's always only 1 way to make 0
        # in change regardless of what coins we have

        # what about any higher amount?
        # now use our recursive function to generate the other answers in the cache

        # init our cache with an answer we already
        # cache = [0 for _ in range(-1, amount+1)]

        if cache is None:
            cache = {x: 0 for x in range(-1, amount+1)}
            cache[0] = 1

        # check our cache to see if the answer we're looking for is already in there
        if cache[amount] > 0:
            return cache[amount]

        # otherwise, we need to populate the cache with the desired answer
        # we can use our naive recursive implementation to do that
        # naive_change needs to update our cache with whatever answer it generates
        return self.naive_change(amount, coins, cache)


# 1. Realize our recursive solution is too slow
# 2. Init a cache - figure out what kind of data structure to use for our cache and what data it's actually going to hold
# 3. Create a new function that does the work of initing the cache and calling the recursiive function with the cache
# 4. Alter our recursive function to take advantage of the cache - change its signature to accept the cache, update it so that
#    it saves its answers in the cache and calls the parent function instead of itself; naive function updates the cache, parent function checks the cache


"""
Bottom up approach that utilizes a cache a little bit differently from 
how we saw it in today's session. Here, we seed the cache with an initial
value cache[0] = 1, and then compute subsequent answers based on the initial
value we have. 
​
This can be done by incrementing cache[i] += cache[i - coin] when coin <= i.
Intuitively, this is saying that the number of ways we have to make 
cache[i - coin] in change can be leveraged to make cache[i] in change. 
"""


def change(amount, coins):
        # init an array of 0s as our cache
    cache = [0 for _ in range(amount+1)]
    # set the initial value: there's 1 way to make 0 cents in change
    cache[0] = 1
    # loop through each coin
    for coin in coins:
                # loop through every cache index, skipping index 0
        for n in range(1, amount+1):
            # a coin > n can't be used to make n in change
            if coin <= n:
                # compute the number of ways to make n cents in terms
                # of an answer we've already computed
                cache[n] += cache[n - coin]
    # fetch the answer we're looking for from the cache and return it
    return cache[amount]
