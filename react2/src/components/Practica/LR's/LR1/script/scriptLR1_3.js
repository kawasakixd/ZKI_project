let arr_num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr_spesh = ['!', '”', '#', '$', '%', '&', '’', '(', ')', '*']
let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];

let sortArr = (nameArr) => {
    return nameArr.sort(() => Math.random() - 0.5);
}

export let generationArrPass2 = () => {
    
    let variant = document.getElementById('select').value

    let arr = [];
    let lengthInput = document.getElementById('Input_id').value.length
    console.log(lengthInput)


    arr_spesh = sortArr(arr_spesh)
    arr_ru = sortArr(arr_ru)
    arr_EN = sortArr(arr_EN)
    arr_num = sortArr(arr_num)



    if (variant == 6) {

        //let AmountOfNumbers = 2
        let AmountOfEnglish = Math.floor(lengthInput / 8) + 3
        let AmountOfSpecial = 11 - (Math.floor(lengthInput / 8) + 5)
        
        // let numStr = '' + num;
        for (let i = 0; i < 2; i++) {
            arr.push(arr_num[i]);
        }

        console.log(AmountOfEnglish)

        for (let i = 0; i < AmountOfEnglish; i++) {
            arr.push(arr_EN[i]);
        }

        console.log(AmountOfSpecial)
        

        for(let i = 0; i < AmountOfSpecial; i++){
            arr.push(arr_spesh[i]);
        }
        console.log(arr)
        showArrPass2(arr)


    } else if (variant == 7) {
        let AmountOfRussian = Math.floor(lengthInput / 8) + 3
        let AmountOfSpecial = 11 - (Math.floor(lengthInput / 8) + 5)

        for (let i = 0; i < 2; i++) {
            arr.push(arr_num[i]);
            }
                
        for (let i = 0; i < AmountOfRussian; i++) {
            arr.push(arr_ru[i]);
            }
        
        
        for(let i = 0; i < AmountOfSpecial; i++){
            arr.push(arr_spesh[i]);
            }
        
        showArrPass2(arr)

    } 
}

let showArrPass2 = (arr) => {
    document.getElementById('cod').value = arr.join('');
}