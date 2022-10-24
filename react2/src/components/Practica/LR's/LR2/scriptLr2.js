const arr5_1 = [21, 24, 2, 3, 15, 1, 6, 16, 22, 10, 14, 12, 19, 7, 13, 25, 5, 17, 10, 8, 4, 18, 11, 23, 9]
const arr5_2 = [2, 18, 1, 23, 21, 12, 25, 5, 4, 19, 16, 9, 15, 14, 11, 13, 3, 24, 17, 8, 22, 10, 20, 7, 6]
const arr5_3 = [4, 24, 10, 15, 12, 25, 13, 14, 6, 7, 3, 18, 22, 20, 2, 17, 9, 11, 5, 23, 16, 1, 8, 19, 21]
const arr6_1 = [22, 36, 7, 2, 9, 35, 26, 18, 31, 10, 5, 21, 13, 23, 15, 24, 28, 8, 12, 4, 14, 34, 30, 17, 6, 1, 33, 25, 19, 27, 32, 29, 11, 16, 20, 3]
const arr6_2 = [18, 28, 3, 12, 15, 35, 32, 11, 14, 17, 4, 33, 20, 9, 24, 13, 16, 29, 21, 27, 10, 25, 23, 5, 1, 30, 34, 8, 31, 7, 19, 6, 26, 36, 22, 7]
const arr6_3 = [8, 10, 24, 4, 32, 33, 29, 20, 28, 21, 1, 12, 36, 5, 22, 14, 3, 31, 2, 27, 18, 30, 25, 9, 17, 26, 6, 35, 16, 11, 19, 23, 13, 7, 34, 15]

const f1 = () => {
    let shifruemoe = '';
    let zashifrValue = '';
    let arrN = [];

    document.getElementById('shifr').addEventListener('click', () => {
        let zashifrovat = document.querySelector(".basicValue")
        let size = zashifrovat.value.length;
        shifruemoe = zashifrovat.value;
        getSize(size)
    })

    function getSize(size) {
        let i = 0;
        for (i; i < 100; i++) {
            if (size <= i * i) {
                break;
            }
        }
        zashifrovanoe(shifruemoe, i);
    }

    let zashifrovanoe = (shifruemoe, n) => {
        let arr = [];
        let arrj = [];
        let k = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                arrj.push(shifruemoe[k])
                k++;
            }
            arr.push(arrj);
            arrj = [];
        }
        arrN = [];
        arrN.push(arr);
        const transpose = matrix => matrix[0].map((_, i) => matrix.map(row => row[i]));
        arr = transpose(arr);
        zashifrValue = arr.join('').replace(/,/gi, '');
        findZashifr(zashifrValue)
    }

    let findZashifr = (value) => {
        let zashifrInputs = document.querySelectorAll('.zashifrovan');
        zashifrInputs.forEach((input) => {
            input.value = value;
            document.querySelector('#decodingInput').value = ``
        })
        getRazshfrInput();
    }


    let getRazshfrInput = () => {
        let decodBtn = document.querySelector('#decod');
        decodBtn.addEventListener('click', () => {
            let decodingInput = document.querySelector('#decodingInput');


            const deshifr = () => {
                const strResult = arrN.toString().replace(/,/gi, '');
                decodingInput.value = strResult
            }
            deshifr();
        })
    }
}
f1();


let defaltStr = '';
const result = document.querySelector('.result');
const result2 = document.querySelector('.result2');

const f2 = () => {

    let genBTn = document.querySelector('#gen');
    genBTn.addEventListener('click', (e) => {
        let method = document.querySelector('.selectinChoose').value;
        let inputValue = document.querySelector('.basicInput').value;
        chooseMethod(method, inputValue)
    })

    let chooseMethod = (method, inputValue) => {
        let arr = [];

        if (inputValue.length > 36) {
            alert("Введенная строка больше 36 символов!!! Введите строку длинна которой меньше или равна 36 символам")
        } else if (inputValue.length === 0) {
            alert('Строка не введена! Введите строку')
        } else {

            const elem = (arrNum) => {
                defaltStr = inputValue;
                arr.push(arrNum);
                arr = arr.flat()

                for (i = 0; i < arr.length; i++) {
                    for (j = 0; j < arr.length; j++) {
                        if (i + 1 == arr[j]) {
                            arr[j] = inputValue[i]
                        }
                    }
                }

                result.value = arr.join('')
                result2.value = arr.join('')
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

        const deshifr2 = () => {
            const decodingInput2 = document.getElementById('decod2');

            const elem2 = () => {
                const finishedValue = [];
                newArrDeckoder.push(arrNum);
                newArrDeckoder = newArrDeckoder.flat()

                for (i = 0; i > newArrDeckoder.length; i--) {
                    for (j = 0; j > newArrDeckoder.length; j--) {
                        if (i + 1 !== newArrDeckoder[j]) {
                            newArrDeckoder[j] = inputValue[i];
                        }
                    }
                    finishedValue.push(newArrDeckoder).join('');
                }
            }

            const deshifrLog = () => {
                switch (true) {
                    case method == 1 && inputValue.length <= 25:
                        elem2(arr5_1)
                        break;

                    case method == 2 && inputValue.length <= 25:
                        elem2(arr5_2)
                        break;

                    case method == 3 && inputValue.length <= 25:
                        elem2(arr5_3)
                        break;

                    case method == 4:
                        elem2(arr6_1)
                        break;

                    case method == 5:
                        elem2(arr6_2)
                        break;
                    case method == 6:
                        elem2(arr6_3)
                        break;
                }
            }

            decodingInput2.addEventListener('click', () => {
                const finished = document.querySelector('.finished')
                finished.value = defaltStr;
            })
        }
        deshifr2()
    }

}
f2();