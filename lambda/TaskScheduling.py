# Problem: https://gist.github.com/seanchen1991/e676705436fe663920d7a00f6eff23c1
# Video: https://www.youtube.com/watch?v=XJK5GaaI6ZU&feature=youtu.be


def task_scheduler(tasks, deps):

  # look over the prereqs (the first value in the dep)
  # any one job can be both a prereq and a dependent
​
# can we use a queue? prereqs need to happen first
# jobs essentially need to line up
​
# the dependencies aren't in any particular order
# which makes it a bit tricky as far as what order we add jobs
# to the queue
​
# construct a linked list from each dependency so that we'd have a bunch of
# 2-element linked lists
# from those, can we figure out how to merge them together into a single linked
# list that respects the dependencies?
# how do we perform the actual merges?
​
# what about a priority queue (heap)?
# a heap needs to know up-front what kind of priority we care about
# in other words, we need to be able to define the priority as a rule
# that we can then feed into the heap as a function
​
# let's randomly generate a bunch of orderings from the list of jobs
# then check them against the dependencies list until we find an ordering
# that satisfies the dependency
# as far as runtime is concerned, the worst case is we'd have to generate
# every permutation of all the jobs before we found a satisfying ordering
# this would get prohibitively expensive for larger job lists
​
# check the dependencies list to see if it contains a cycle; in this case there's
# no valid ordering
​
# use a directed graph to model the order of the dependencies
# start off by throwing every job that isn't in the list of dependencies into
# the result array, then construct a directed from the remaining jobs and then
# use that to figure out a valid ordering
# once the graph is generated, use a breadth first traversal to walk the graph
# and add the jobs to the result array in a valid order
# just also add the jobs that don't appear in the dependency list to the graph as
# unconnected vertices
# how do we walk the graph?
# from where in the graph do we start traversing?
# start traversing the graph from a node that has no dependencies, then use bfs
# to walk the graph, in order to find a valid ordering

# ==========================================================
# my implemention
# go to node without parent
# dfs for each child

# start adding to result from longest route to smallest route
