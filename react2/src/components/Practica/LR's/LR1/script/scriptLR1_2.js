let arr_num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];
let arr_RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я'];
let arrPass = [];

export let eventForGenerationBtn = () => {

    let number = document.getElementById('number').value;
    console.log(number)

    if (number > 20 || number < 1) {
        alert("кол-во символов больше 20 или меньше 1")
    }
    else {
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
        if (!Boolean(mapArr.length)) {
            alert('не один чекбокс не был задействован')
        }
        else{
            createArrPass(number, mapArr);
        }
    }

    
    
}

let sortArr = (nameArr) => {
    return nameArr.sort(() => Math.random() - 0.5);
}

let createArr = (newArr) => {
    newArr = newArr.flat();
    return newArr
}
function createArrPass(lengthArr, mapArr) {

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
    console.log(stringPassForInput)
    document.getElementById('Pass2').value = stringPassForInput
}