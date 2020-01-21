# https://gist.github.com/seanchen1991/d067811ae85321d7f632d964ae9c5655


def spiral_copy(matrix):
  # be able to traverse along rows
    # traverse along an array as per usual
  # be able to traverse along columns
    # iterate along each row
      # print the element from that row corresponding to the column index
    #  result = []
    #   # our current row index
    #   row = 0
    #   # our current column index
    #   col = 0
    #   # total number of rows we can't go past
    #   row_boundary = len(matrix) - 1
    #   # total number of columns we can't go past
    #   col_boundary = len(matrix[0]) - 1
    # ​
    #   # iterate so long as top_row is in bounds of bottom_row and left_col
    #   # is in bounds of right_col
    #   while row <= row_boundary and col <= col_boundary:
    #     # iterate along each column element in the top row
    #     for i in range(col, col_boundary + 1):
    #     # in other words, row pointer stays at 0, increment the column pointer
    #       # add each element to a result array
    #       result.append(matrix[row][i])
    #     # update our boundary
    #     # increment our row index
    #     row += 1
    #     # iterate along each row element in the right column
    #     # column pointer stays where it is, increment the row pointer
    #     for i in range(row, row_boundary + 1):
    #       # add each element to a result array
    #       result.append(matrix[i][col_boundary])
    #     # update our column boundary to shift to the left
    #     col_boundary -= 1
    #     # iterate along bottom row right to left
    #     for i in range(col_boundary, col + 1, -1):
    #       # add each element to a result array
    #       result.append(matrix[row_boundary][i])
    #     row_boundary -= 1
    #     # iterate along left column bottom to top
    #     for i in range(row_boundary, row + 1, -1):
    #       # add each element to a result array
    #       result.append(matrix[i][col])
    #     col += 1
    #     # we need to keep track of the "boundaries"
    #       #
    #   return result

    result = []
    row = 0
    col = 0
    row_boundary = len(matrix) - 1
    col_boundary = len(matrix[0]) - 1


​
while row <= row_boundary and col <= col_boundary:
        for i in range(col, col_boundary + 1):
            result.append(matrix[row][i])
        row += 1

        for i in range(row, row_boundary + 1):
            result.append(matrix[i][col_boundary])
        col_boundary -= 1

        # need to check to make sure we haven't reached the end of the row
        if row <= row_boundary:
              # fixed reverse for loop
            for i in range(col_boundary, col-1, -1):
                result.append(matrix[row_boundary][i])
            row_boundary -= 1

            # need to check to make sure we haven't reached the end of the column
        if col <= col_boundary:
              # fixed reverse for loop
            for i in range(row_boundary, row-1, -1):
                result.append(matrix[i][col])
            col += 1
​
return result
​
# what do we need to need to keep track of?
# we need to know which row we're in and which column we're currently in
# everything we've added to the result array
# how do we do this?
# can we mutate the matrix as we go?
# yes, we can mutate the matrix as we go
# can we achieve the same result without mutating?
​
# thinking about this problem recursively:
# handling one layer would be one recursive call
​
​
arr1 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
]
​
print(spiral_copy(arr1))
