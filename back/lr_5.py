from math import ceil
from random import shuffle


def lr_5_1(message):
    s = list(message)
    s1 = round(len(s)**0.5)
    s2 = ceil(len(s)**0.5)
    a = [[s.pop(0) if s else ' ' for _ in range(s1)] for _ in range(s2)]
    shuffle(a)
    a = list(map(list, zip(*a)))
    shuffle(a)
    # print(''.join([i for j in a for i in j]))
    return ''.join([i for j in a for i in j])


matrix = [['a', 'b', 'c', 'd', 'e'],
          ['f', 'g', 'h', 'i', 'k'],
          ['l', 'm', 'n', 'o', 'p'],
          ['q', 'r', 's', 't', 'u'],
          ['v', 'w', 'x', 'y', 'z']]

matrixHeight = len(matrix)
matrixWidth = len(matrix[0])


def get_crypto_char(char, cipher=True):
    for indexHeight in range(0, matrixHeight):
        for indexWidth in range(0, matrixWidth):
            if char == matrix[indexHeight][indexWidth]:
                if cipher:
                    return matrix[(indexHeight + 1) % matrixHeight][indexWidth]
                else:
                    return matrix[(indexHeight - 1) % matrixHeight][indexWidth]
    return char


def encryption(message):
    newMessage = ""
    for messageIndex in range(0, len(message)):
        newMessage += get_crypto_char(message[messageIndex])
    return newMessage


def lr_5_2_1(message):
    cypherMessage = encryption(message)
    return cypherMessage


def lr_5_2_2(message):
    newMessage = ""
    new_Message = ""
    for messageIndex in range(0, len(message)):
        new_Message = ord(get_crypto_char(message[messageIndex])) + 1
        newMessage += chr(new_Message)

    return newMessage


def lr_5_2_3(message):
    matrix = [['d', 'r', 'a', 'f', 't'],
              ['b', 'c', 'e', 'g', 'h'],
              ['i', 'k', 'l', 'm', 'n'],
              ['o', 'p', 'q', 's', 'u'],
              ['v', 'w', 'x', 'y', 'z']]

    cypherMessage = encryption(message)
    return cypherMessage

lr_5_2_2('aboba')