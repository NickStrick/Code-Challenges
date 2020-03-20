# Variant of the staircase problem that wants us to return
# the number of ways in which we can reach n steps using 1,
# 2, or 3 jumps


def stepPermsRecurse(n, cache):
    # check the cache to see if n is already an answer we've solved before
    if cache[n] > 0:
        return cache[n]
    # base cases
    if n <= 0:
        return 0
    if n == 1:
        return 1
    if n == 2:
        return 2
    if n == 3:
        return 4
    else:
        # otherwise, recurse, saving the answer to the cache
        cache[n] = stepPermsRecurse(
            n-1, cache) + stepPermsRecurse(n-2, cache) + stepPermsRecurse(n-3, cache)
        return cache[n]
