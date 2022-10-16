let arr_num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr_spesh = ['!', '”', '#', '$', '%', '&', '’', '(', ')', '*']
let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];
let arr_RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я'];
let lengthOfPass = 0;
let variant = 0;
let p, v, t;
let arrPass = [];
let arrPass2 = [];

let sortArr = (nameArr) => {
    return nameArr.sort(() => Math.random() - 0.5);
}

let createArr = (newArr) => {
    newArr = newArr.flat();
    return newArr
}

const varBtn = document.querySelector('.var__btn');
varBtn.addEventListener('click', () => {
    let inputValue = document.querySelector('.variant__input');
    variant = +inputValue.value;
    showS();
})

let showS = () => {
    if (variant === 2 || variant === 8 || variant === 11) {

        document.querySelector('.task1__wrapper').innerHTML = '';

        switch (variant) {
            case 2:
                p = Math.pow(10, -5), v = 3, t = 14400;
                break;
            case 8:
                p = Math.pow(10, -7), v = 15, t = 28800;
                break;
            case 11:
                p = Math.pow(10, -6), v = 11, t = 20160;
                break;
        }

        let s = (v, t, p) => {
            return (v * t) / p
        }

        let task1 = document.querySelector('.tasks')
        task1.innerHTML = `<p class = "s">S = ${s(v, t, p)}</p>`
        createArgForPass();

        document.querySelector('.task2__wrapper').innerHTML = '';
        writeN();
    } else {
        document.querySelector('.task2__wrapper').innerHTML = '';
        document.querySelector('.tasks').innerHTML = '';
        document.querySelector('.task1__wrapper').innerHTML = `<h3 class = "notThisVariant">Такого варианта нет</h3>`
    }

}

let createArgForPass = () => {
    let lengthOfArrBlock = document.createElement('div')
    lengthOfArrBlock.classList.add('length__wrapper');
    lengthOfArrBlock.innerHTML = `
        <p>Желаемая длинна пароля:</p>
        <input type="text" class='length__input' maxlength="2">`
    task1 = document.querySelector(".task1__wrapper")
    task1.appendChild(lengthOfArrBlock);

    let chekers = document.createElement('div')
    chekers.classList.add('chekers__wrapper');
    chekers.innerHTML = `
        <div class = 'inputs__collection'>
            <label><input type="checkbox" id="num">Num</label>
            <label><input type="checkbox" id="ru">ru</label>
            <label><input type="checkbox" id="Ru">Ru</label>
            <label><input type="checkbox" id="en">en</label>
            <label><input type="checkbox" id="En">En</label>
        </div>
        <button class='generation__btn'>Сгенерировать пароль</button>`
    task1.appendChild(chekers);

    let inputPassword = document.createElement('div');
    inputPassword.classList.add('inputPasswordWrapper');
    inputPassword.innerHTML = `
         <input type="text" readonly class='inputPass'>`
    task1.appendChild(inputPassword)

    eventForGenerationBtn();
}

let eventForGenerationBtn = () => {
    const lenBtn = document.querySelector('.generation__btn');
    lenBtn.addEventListener('click', () => {
        let lengthOfInput = document.querySelector('.length__input');

        if (+lengthOfInput.value > 27) {
            alert("Максимальная длинна пароля 27 символов. Пароль будет составлен из 27 символов")
        }
        lengthOfPass = +lengthOfInput.value <= 27 ? +lengthOfInput.value : 27;

        let mapArr = [];

        if (document.getElementById('num').checked) {
            mapArr.push(arr_num)
        }

        if (document.getElementById('ru').checked) {
            mapArr.push(arr_ru)
        }

        if (document.getElementById('Ru').checked) {
            mapArr.push(arr_RU)
        }

        if (document.getElementById('en').checked) {
            mapArr.push(arr_en)
        }

        if (document.getElementById('En').checked) {
            mapArr.push(arr_EN)
        }
        createArrPass(lengthOfPass, mapArr);
    })
}

function createArrPass(lengthArr, mapArr) {

    if (lengthArr == 0) {
        alert("Длинна пароля не указана")
    }

    if (mapArr.length === 0) {
        alert("Вы не выбрали состовляющие пароля")
    }

    if (lengthArr != 0 && mapArr.length != 0) {
        mapArr = createArr(mapArr);
        mapArr = sortArr(mapArr);

        arrPass = [];
        for (let i = 0; i < lengthArr; i++) {
            arrPass.push(mapArr[Math.floor(Math.random() * mapArr.length)])
        }
        writePass(arrPass);
    }
}

let writePass = (password) => {
    let stringPassForInput = password.join('');
    document.querySelector('.inputPass').value = stringPassForInput
}

let writeN = () => {
    let lengthN = document.createElement('div')
    lengthN.classList.add('lengthId__wrapper');
    lengthN.innerHTML = `
        <p>Идентификатор пользователя</p>
        <div class = "inputs__collection2">
            <input type="text" class='lengthId__input'>
            <input type="text" class='arrRes' readonly value = "">
        </div>
        `
    let task2 = document.querySelector(".task2__wrapper");
    task2.appendChild(lengthN);

    eventForUserId()
}

let eventForUserId = () => {
    let inputId = document.querySelector('.lengthId__input')
    inputId.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            let valueId = inputId.value.length
            generationArrPass2(variant, arrPass2, valueId)
        }
    })
}

let generationArrPass2 = (variant, arr, lengthN) => {


    arr = [];

    arr_spesh = sortArr(arr_spesh)
    arr_en = sortArr(arr_en)
    arr_EN = sortArr(arr_EN)
    arr_num = sortArr(arr_num)

    if (variant == 2) {

        let num = lengthN ** 4 % 100;
        let numStr = '' + num;
        for (let i = 0; i < 3; i++) {
            arr.push(arr_en[i]);
        }

        for (let i = 0; i < 2; i++) {
            arr.push(arr_EN[i]);
        }

        if (numStr.length === 2) {
            arr.push(num % 10);
            num = Math.floor(num / 10);
            arr.push(num)
        } else {
            arr.push(0);
            arr.push(num)
        }
        showArrPass2(arr)

    } else if (variant == 8) {

        let q = lengthN ** 3 % 5;
        let p = lengthN ** 2 % 6;

        for (let i = 0; i < 1 + q; i++) {
            arr.push(arr_en[i]);
        }

        for (let i = 2 + q; i < 2 + q + p; i++) {
            arr.push(arr_EN[i]);
        }

        while (arr.length !== 12) {
            for (let i = 0; i < 12 - arr.length; i++) {
                arr.push(arr_num[i])
            }
        }
        showArrPass2(arr)

    } else if (variant == 11) {

        q = lengthN % 5;

        for (let i = 0; i < 1 + q; i++) {
            arr.push(arr_spesh[i]);
        }

        while (arr.length !== 8) {
            for (let i = 0; i < 8 - arr.length; i++) {
                arr.push(arr_ru[i])
            }
        }

        arr.push(arr_num[1]);
        showArrPass2(arr)
    }
}

let showArrPass2 = (arr) => {
    document.querySelector('.arrRes').value = arr.join('');
}