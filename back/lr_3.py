string = input("Введите ваше ФИО: ")
k = int(input("Введите К: "))



def task_1(string, k):
    answer = ''
    ans = ''
    for i in string:
        num = ord(i)
        new_num = num + k
        answer += chr(new_num)


    for i in answer:
        num_1 = ord(i)
        new_num_1 = num_1 - k
        ans += chr(new_num_1)

    return answer, ans,  len(ans), len(answer)
print(task_1(string, k))