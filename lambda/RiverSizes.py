# video: https://youtu.be/nnRZ5Gnhhhk
def river_sizes(map):


def river_sizes(map):

  # iterate through each row and check to see if its a 0 or 1 and see if it's related
  # to a position in the next row
    # we see a 0
      # continue looping
    # we see a 1
      # have another array that keeps track of the position of where the 1 is in the
      # input matrix
      # this tells us we're looking at a part of a river
​
# how do we record our progress?
# what data structure do I need to use here?
# hash tables?
# how do keep track of which positions we've visited?
# 1. once we've gone over a 1, swap it to a 0 so that in future iterations
# we don't count it again
# 2. keep another matrix of the same size that has true and false booleans keeping
# track of if we've visited this position already
​
# does the work of counting the length of a river
# input: position of a 1 in our matrix and the matrix itself
# checks in all valid horizontal and vertical directions to see if
# there are any 1s in those directions
# if we run into any other 1s, continue this process with those 1s, keeping track
# of the length as we build up the river
# returns the length of the river
# perform the traversal using BFS/DFS
