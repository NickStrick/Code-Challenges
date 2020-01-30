# Problem: https://gist.github.com/seanchen1991/4ff89b7033739a372249fb83893cb9e6
# video: https://youtu.be/4urj8Mj7G78


def start_of_linked_list_cycle(head):

        # 1. figure out if there is a cycle
        # 2. figure out the length of the cycle
        # 3. move both pointers back to the beginning, jump one of the pointers ahead by the cycle
        # length; move both pointers in unison until they meet
​
# unless the cycle starts at exactly halfway in the list, then fast and slow probably
# won't meet at the start
​
# multiple fast pointers that all traverse the list at different rates
​
# what information are we missing, or what do we need to figure out in order to adapt
# the fast and slow pointer idea?
# distance between the start of the list and the current node position
