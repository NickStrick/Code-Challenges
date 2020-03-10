# https://youtu.be/O3HBd0ICJ2M

# defaultdict is the same as normal dictionaries, except a defaultdict
# sets a default value if a key has not been set yet; this is mostly
# for convenience
from collections import defaultdict


def freqQuery(queries):
    val_counts = defaultdict(int)
    freq_counts = defaultdict(int)
    answers = []

    for i, j in queries:
        if i == 1:
            # O(1)
            if j in val_counts:
                # decrement the value's old count
                if freq_counts[val_counts[j]] > 0:
                    freq_counts[val_counts[j]] -= 1
                val_counts[j] += 1
                # increment the frequency in freq_counts
                freq_counts[val_counts[j]] += 1
            else:
                val_counts[j] = 1
                if freq_counts[val_counts[j]]:
                    freq_counts[val_counts[j]] += 1
                else:
                    freq_counts[val_counts[j]] = 1
        if i == 2:
                # O(1)
                # check that the value exists in val_counts
            if val_counts[j]:
                    # decrement the old frequency count
                freq_counts[val_counts[j]] -= 1
                val_counts[j] -= 1
                # increment the new frequency count
                freq_counts[val_counts[j]] += 1
        if i == 3:
            # O(n) linear in the number of key, value pairs
            # aim for a O(1) runtime
            # somehow check j in an object
            # instead of having the j values be checked against
            # the values in an object, it would be much faster
            # to check the j values against the keys of an object
            if j in freq_counts and freq_counts[j] > 0:
                answers.append(1)
            else:
                answers.append(0)

    return answers
