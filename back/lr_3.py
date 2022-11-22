from re import findall
import math


# string = input("Введите ваше ФИО: ")
# k = int(input("Введите К: "))

# def task_1(string, k):
#     answer = ''
#     ans = ''
#     for i in string:
#         num = ord(i)
#         new_num = num + k
#         answer += chr(new_num)

#     for i in answer:
#         num_1 = ord(i)
#         new_num_1 = num_1 - k
#         ans += chr(new_num_1)

#     return answer


# print(task_1(string, k))


message = list(input("Write the message: ").upper())
def regular(text):
    template = r"[A-Z]{2}"
    return findall(template, text)
def encryptDecrypt(flag, message, final = ""):
    if flag is True:    #max
        matrixKey = [
            ['U','D','A','R','B'],
            ['C','E','F','G','H'],
            ['I','K','L','M','N'],
            ['O','P','Q','S','T'],
            ['V','W','X','Y','Z']
        ]; addSymbol = 'X'
    else:   #uebok
                matrixKey = [
            ['A','L','G','O','R'],
            ['I','T','H','M','B'],
            ['C','D','E','F','K'],
            ['N','P','Q','S','U'],
            ['V','W','X','Y','Z']
        ]; addSymbol = 'X'
    for symbol in message:
        if symbol not in [chr(x) for x in range(65,91)]:
            message.remove(symbol)
        for index in range(len(message)):
            if message[index] == 'J': message[index] = 'I'
        for index in range(1,len(message)):
            if message[index] == message[index - 1]:
                message.insert(index,addSymbol)
        if len(message) % 2 != 0:
            message.append(addSymbol)

    binaryList = regular("".join(message))
    for binary in range(len(binaryList)):
        binaryList[binary] = list(binaryList[binary])
        for indexString in range(len(matrixKey)):
            for indexSymbol in range(len(matrixKey[indexString])):
                if binaryList[binary][0] == matrixKey[indexString][indexSymbol]:
                    y0, x0 = indexString, indexSymbol
                if binaryList[binary][1] == matrixKey[indexString][indexSymbol]:
                    y1, x1 = indexString, indexSymbol
        for indexString in range(len(matrixKey)):
            if matrixKey[y0][x0] in matrixKey[indexString] and matrixKey[y1][x1] in matrixKey[indexString]:
                x0 = x0 + 1 if x0 != 4 else 0
                x1 = x1 + 1 if x1 != 4 else 0

        y0,y1 = y1,y0
        binaryList[binary][0] = matrixKey[y0][x0]
        binaryList[binary][1] = matrixKey[y1][x1]
    for binary in range(len(binaryList)):
        for symbol in binaryList[binary]:
            final += symbol
    return {
        "answer": final.lower()
    }


# string_task_3 = input("Введите строку: ").lower()
# a = int(input("Введите а: "))
# b = int(input("Введите b: "))
# c = int(input("Введите c: "))

# NumberA = a ** 2 - 4 * a * a
# NumberB = b ** 2 - 4 * b * b
# NumberC = c ** 2 - 4 * c * c

# def task_3(string_task_3):
#     answer = " "
#     list_of_letters = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я']
#     for i in string_task_3:
#         for j in list_of_letters:
#             if i == j:
#                 index_of_letter = list_of_letters.index(j)

#         identificator = NumberA * (index_of_letter * index_of_letter) + NumberB * index_of_letter + NumberC

#         answer += list_of_letters[int(math.fabs(index_of_letter + identificator) % len(list_of_letters))]

#     return answer


# print(task_3(string_task_3))