class SkipNode:
    # is a node just an individual square, or is it the entire station?
    # if we opt for the station representation, then we could represent it
    # as a list of pointers to the next station
    def __init__(self, elem=None):
        self.elem = elem
        # self.stations holds pointers to the next station
        # index 0 will always hold the pointer to the next local station
        # indices after that will point to express stations
        self.stations = []
        # what about the height?

        # "square" representation
        self.prev = None
        self.next = None
        self.below = None
        self.above = None


class SkipList:
    def __init__(self, max_height):
        # should have pointers to every single station in the first node
