def countBits(n):
    b = str(bin(n).replace("0b", ""))
    b = b.replace('0', "")
    return len(b)
