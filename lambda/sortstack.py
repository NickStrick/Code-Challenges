# stack class here
class Stack:
    def __init__(self):
        self.storage = []

    def push(self, item):
        self.storage.append(item)

    def pop(self):
        return self.storage.pop()

    def piike(self):
        return self.storage[len(self.storage) - 1]

    def is_empty(self):
        return len(self.storage) == 0

    def print_contents(self):
        for x in self.storage:
            print(x)


"""
Constraint
1. cant use other data structures
2. we're allowed one additional stack
3. stacks have lifo ordering
"""


def sort_stack(input_stack):
    # invert the elements of the input stack
    # given this baseline, how do we perform the sorting?

    # total numebr of outstanding stacks is 2
    # use a while loop
    # add the biggest number that's being pushed to

    # allocate an output stack
    # pop top of input stack
    # push to outputstack
    # compare top of both stacks
    # if input stack element is smaller than output stack element
    # then we want to pop off the output stack element ot add
    # the input stack element in the desired order

    # add elements to the output stack gfrom the input stack
    # in ascending order
    # whenever we need to add an element from the input stack to
    # the output stack "underneath" a bunch of preexisting elements
    # already in the output stack, pop from the output stack until we can play the element from the input stack into the output
    # in its appropriate spot

    output_stack = Stack()
    # add top element from the input stack to the output stack
    output_stack.push(input_stack.pop())

    # while the output stack is not empty
    while not input_stack.is_empty():
        # pop from the input stack and push to the output stack
        # or hold the input stack element in a temp variable
        temp = input_stack.pop()
        # compare temp var to the top of the output stack
        # if the top of the output stack > temp then: move temp value underneath it
        # move output stack element out of the way back to the input stack

        while not output_stack.is_empty() and output_stack.peek() > temp:
            input_stack.push(output_stack.pop())

        output_stack.push(temp)

    return output_stack


s = Stack()
s.push(10)
s.push(4)

sorted_stack = sort_stack(s)
sorted_stack.print_contents()  # should print 4, 10

# print a newline
print()

s.push(8)
s.push(5)
s.push(1)
s.push(6)
s.push(19)
s.push(4)

sorted_stack = sort_stack(s)
sorted_stack.print_contents()  # should print 1, 4, 5, 6, 8, 19
