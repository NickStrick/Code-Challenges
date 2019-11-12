def tribonacci(signature, n):
    if n == 0:
        return []
    if n <= 3:
        return signature[:n]
    # your code here
    print(signature, n)
    while len(signature) < n:
        index = len(signature)
        value = signature[index-1] + signature[index-2] + signature[index-3]
        signature.append(value)
#     print(signature)
    return signature
