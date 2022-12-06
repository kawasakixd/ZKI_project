from math import log, ceil


def lr_9_1(var):
    if var == 6:
        n = 118
        k = 9
        s = 50
        m = 7
        v = 12

    elif var == 7:
        n = 128
        k = 10
        s = 500
        m = 0
        v = 0

    c = pow(n, k) / s
    res = c + c * v / m

    return int(res)


def lr_9_2(var):
    if var == 6:
        n = 118
        t = 90 * 365 * 24 * 3600
        s = 50
        res = ceil(log(t * s, 52))

    elif var == 7:
        n = 128
        t = 100 * 365 * 24 * 3600
        s = 500
        res = ceil(log(t * s, 52))

    return res


def lr_9_3(var):
    if var == 6:
        k = 11
        t = 90 * 365 * 24 * 3600
        s = 50
        res = ceil(pow(t * s, 1 / k))

    elif var == 7:
        k = 12
        t = 100 * 365 * 24 * 3600
        s = 500
        res = ceil(pow(t * s, 1 / k))

    return res
