import random


def task_1_LR4():
    list_1 = []
    answer_1 = ' '
    set_for_task_2 = {-3, 0, 6, 9, 12, 15}
    list_2 = []
    answer_2 = ' '
    list_3 = []
    answer_3 = ' '
    list_4 = []
    answer_4 = ' '
    set_for_task_5 = {-30, 10, 63, 59, 120, 175}
    list_5 = []
    answer_5 = ' '
    list_6 = []
    answer_6 = ' '
    asnwer_for_6 = []

    for i in range(10):     #list_1
        list_1.append(random.randint(3, 12))

    for i in list_1:
        answer_1 += str(i) + ' '

    for i in range(2):      #list_2
        for j in set_for_task_2:
            list_2.append(j)

    del list_2[0:2]

    for i in list_2:
        answer_2 += str(i) + ' '

    for i in range(10):     #list_3
        list_3.append(random.randint(3, 12))

    for i in list_3:
        answer_3 += str(i) + ' '

    left_board_for_4 = -2.3       #task_4
    right_board_for_4 = 1.4

    while left_board_for_4 <= right_board_for_4:
        list_4.append(left_board_for_4)
        left_board_for_4 += 0.1

    random.shuffle(list_4)

    for i in list_4[0:10]:
        answer_4 += str(i) + ' '

    for i in range(2):      #list_5
        for j in set_for_task_5:
            list_5.append(j)

    del list_5[0:2]

    for i in list_5:
        answer_5 += str(i) + ' '

    left_board_for_5 = 1    #list_6
    right_board_for_5 = 0.0000000000000001

    while left_board_for_5 > right_board_for_5:
        list_6.append(left_board_for_5)
        left_board_for_5 *= 0.1

    random.shuffle(list_6)

    for i in range(10):
        asnwer_for_6.append(random.choice(list_6))

    random.shuffle(asnwer_for_6)

    for i in asnwer_for_6:
        answer_6 += str(i) + ' '

    return {"answer_1": answer_1, "answer_2": answer_2, "answer_3": answer_3, "answer_4": answer_4, "answer_5": answer_5,
            "answer_6": answer_6}


def task_2_LR4():
    list_to_predict = [random.randint(0, 9) for i in range(4)]
    number_to_predict = ''
    counter = 1
    ox = 0
    cows = 0


    for i in list_to_predict:
        number_to_predict += str(i)

    while counter < 10:
        user_number = input("Введите четырехзначное число: ")

        for i in number_to_predict:
            for j in user_number:
                if i == j and number_to_predict.index(i) == user_number.index(j):
                    cows += 1
                elif i == j:
                    ox += 1
        if cows == 4:
            print(f"Угадано с {counter} попытки")
            break

        print(f"коровы - {cows} , быки - {ox}")

        ox = 0
        cows = 0
        counter += 1
