import axios from "axios"
import { useState } from 'react'



export let FirstRequestEx1 = (data, value) => {
    document.getElementById("Answer").value = data[value]
}

export let Ex2 = (num) => {
    let cows = 0;
    let bulls = 0;
    let person_num = document.getElementById('basicValue').value
    if (!isNaN(Number(person_num))) {
        if (person_num.length == 4) {
            num = String(num).split('')
            person_num = person_num.split('')
            num.forEach(basicNum => {
                person_num.forEach(personNum =>{
                    if(basicNum == personNum && num.indexOf(basicNum) == person_num.indexOf(personNum)) cows+=1
                    else if(basicNum == personNum) bulls+=1
                })
            });
            console.log(num, person_num, cows, bulls)
            if (cows >= 4) {
                document.getElementById('AnswerCowAndBulls').value = "Вы угадали число: " + num.join('')
                return true
            }
            else {
                document.getElementById('AnswerCowAndBulls').value = "Cows = " + cows + " Bulls = " + bulls
            }
        }
        else{
            alert("Введите четырехзначное число!") 
        }
    }
    else alert("Введите число!")

}