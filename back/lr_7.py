import hashlib


def lr_7_1(a, b, n):
    tmp = a
    sum = tmp

    for i in range(b):
        for j in range(a):
            sum += tmp
            if sum >= n:
                sum -= n
        tmp = sum

    return {
        "answer": tmp
    }


def lr_7_2(message):
    return {
        "answer": hashlib.md5(message.encode('utf-8')).hexdigest()
    }
