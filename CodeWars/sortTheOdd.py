def sort_array(source_array):
    if source_array == []:
        return []
    odds = []
    for num in range(len(source_array)):
        if source_array[num] % 2 != 0:
            odds.append(source_array[num])
    odds.sort()
    oddCount = 0
    for num in range(len(source_array)):
        if source_array[num] % 2 != 0:
            source_array[num] = odds[oddCount]
            oddCount += 1
    return source_array
    # Return a sorted array.

# def sort_array(arr):
#   odds = sorted((x for x in arr if x%2 != 0), reverse=True)
#   return [x if x%2==0 else odds.pop() for x in arr]


print(sort_array([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
print(sort_array([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
print(sort_array([]), [])
