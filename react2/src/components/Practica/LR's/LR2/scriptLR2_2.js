const arr5_1 = [21, 24, 2, 3, 15, 1, 6, 16, 22, 10, 14, 12, 19, 7, 13, 25, 5, 17, 10, 8, 4, 18, 11, 23, 9]
const arr5_2 = [2, 18, 1, 23, 21, 12, 25, 5, 4, 19, 16, 9, 15, 14, 11, 13, 3, 24, 17, 8, 22, 10, 20, 7, 6]
const arr5_3 = [4, 24, 10, 15, 12, 25, 13, 14, 6, 7, 3, 18, 22, 20, 2, 17, 9, 11, 5, 23, 16, 1, 8, 19, 21]
const arr6_1 = [22, 36, 7, 2, 9, 35, 26, 18, 31, 10, 5, 21, 13, 23, 15, 24, 28, 8, 12, 4, 14, 34, 30, 17, 6, 1, 33, 25, 19, 27, 32, 29, 11, 16, 20, 3]
const arr6_2 = [18, 28, 3, 12, 15, 35, 32, 11, 14, 17, 4, 33, 20, 9, 24, 13, 16, 29, 21, 27, 10, 25, 23, 5, 1, 30, 34, 8, 31, 7, 19, 6, 26, 36, 22, 7]
const arr6_3 = [8, 10, 24, 4, 32, 33, 29, 20, 28, 21, 1, 12, 36, 5, 22, 14, 3, 31, 2, 27, 18, 30, 25, 9, 17, 26, 6, 35, 16, 11, 19, 23, 13, 7, 34, 15]

let defaltStr = '';
const result = document.querySelector('.result');

export const f2 = () => {
    chooseMethod();
    function chooseMethod(){
        let arr = [];
        let method = document.getElementById('selectinChoose').value;
        let inputValue = document.getElementById('basicValueForSecond').value
        let result = document.getElementById('zashifrovanForSecond')

        if (inputValue.length > 36) {
            alert("Введенная строка больше 36 символов!!! Введите строку длинна которой меньше или равна 36 символам")
        } else if (inputValue.length === 0) {
            alert('Строка не введена! Введите строку')
        } else {

            const elem = (arrNum) => {
                defaltStr = inputValue;
                arr.push(arrNum);
                arr = arr.flat()

                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < arr.length; j++) {
                        if (i + 1 == arr[j]) {
                            arr[j] = inputValue[i]
                        }
                    }
                }

                result.value = arr.join('')
            }

            switch (true) {
                case method == 1 && inputValue.length <= 25:
                    elem(arr5_1)
                    break;

                case method == 2 && inputValue.length <= 25:
                    elem(arr5_2)
                    break;

                case method == 3 && inputValue.length <= 25:
                    elem(arr5_3)
                    break;

                case method == 4:
                    elem(arr6_1)
                    break;

                case method == 5:
                    elem(arr6_2)
                    break;
                case method == 6:
                    elem(arr6_3)
                    break;

                case method == 1 || method == 2 || method == 3 && inputValue.length > 25:
                    alert('Введенная строка больше чем необходимо (25)')
                    break;
            }
        }
    }
}