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

# JS IMPLEMENTATION
# function frequencyQueries(queries) {
#     const answers = [];
#     // keeps track of the number of occurrences of eacy query value
#     const occurrences = {};
#     // keeps track of how many values have shown up a certain number of times
#     // keys are integers representing frequency and values are the number
#     // of values that showcase that frequency
#     // for example, if a query specifies a new value, then that value has
#     // only shown up once, so we'll increment the value associated with
#     // the key of 1 to indicate that there is an additional value that
#     // has shown up once
#     const frequencies = {};
# ​
#     for (const [op, val] of queries) {
#         if (op === 1) {
#             // subtract an occurrence of the value's prior frequency
#             frequencies[occurrences[val]]--;
#             // add the value to our occurrences map
#             occurrences[val] = (occurrences[val] || 0) + 1;
#             // increment an occurrence of the value's new frequency
#             frequencies[occurrences[val]] = (frequencies[occurrences[val]] || 0) + 1;
#         } else if (op === 2 && occurrences[val]) {
#             // subtract an occurrence of the value's prior frequency
#             frequencies[occurrences[val]]--;
#             // remove the value from our occurrences map
#             occurrences[val]--;
#             // increment an occurrence of the value's new frequency
#             frequencies[occurrences[val]]++;
#         } else if (op === 3) {
#             // all we have to do for operation 3 is check if the value
#             // associated with the frequency > 0
#             answers.push(frequencies[val] > 0 ? 1 : 0);
#         }
#     }
# ​
#     return answers;
# }


# RUST IMPLEMENTATION

# use std::collections::HashMap;
# ​
# fn frequency_queries(queries: Vec<(i32, i32)>) -> Vec<i32> {
#   let mut val_counts: HashMap<i32, i32> = HashMap::new();
#   let mut freq_counts: HashMap<i32, i32> = HashMap::new();
#   let mut answers = vec![];
# ​
#   for (i, j) in queries {
#     match i {
#       1 => {
#         let f = val_counts.entry(j).or_insert(0);
#         // decrement j's value in freq_counts
#         freq_counts.entry(*f).and_modify(|v| if *v > 0 { *v -= 1 }).or_insert(0);
#         // increment j's value in val_counts
#         *f += 1;
#         // increment j's value in freq_counts
#         freq_counts.entry(*f).and_modify(|v| *v += 1).or_insert(1);
#       },
#       2 => {
#         let f = val_counts.entry(j).or_insert(0);
#         // decrement j's value in freq_counts
#         freq_counts.entry(*f).and_modify(|v| if *v > 0 { *v -= 1 }).or_insert(0);
#         // decrement j's value in val_counts
#         if *f > 0 { *f -= 1; }
#         // increment j's value in freq_counts
#         freq_counts.entry(*f).and_modify(|v| *v += 1).or_insert(1);
#       },
#       3 => {
#         let fc = freq_counts.entry(j).or_insert(0);
#         if *fc > 0 { answers.push(1); } else { answers.push(0); }
#       },
#       _ => panic!("Got an unexpected query number"),
#     }
#   }
# ​
#   answers
# }
