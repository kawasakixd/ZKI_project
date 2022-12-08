import axios from "axios"


export const ClickEx1 = () => {
    let a = document.getElementById("selectinChooseForThird").value
    if(a == "true") a = 6
    else a = 7
    if (!isNaN(Number(a))) {
        axios
            .post("http://127.0.0.1:5000/", {
                "LR": 9,
                "var": a,
                "nameFunction": "LR9_EX1",
            })
            .then(res => {
                document.getElementById('encrypt_message_lr9_ex1').value = res.data.answer
            })
    }
    else {
        alert("Ведённое значение не число!")
    }

}

export const ClickEx2 = () => {
    let a = document.getElementById("selectinChooseForThird").value
    if(a == "true") a = 6
    else a = 7
    console.log(a)
    if (!isNaN(Number(a))) {
        axios
            .post("http://127.0.0.1:5000/", {
                "LR": 9,
                "var": a,
                "nameFunction": "LR9_EX2",
            })
            .then(res => {
                document.getElementById('encrypt_message_lr9_ex2').value = res.data.answer
            })
    }
    else {
        alert("Ведённое значение не число!")
    }

}

export const ClickEx3 = () => {
    let a = document.getElementById("selectinChooseForThird").value
    if(a == "true") a = 6
    else a = 7
    if (!isNaN(Number(a))) {
        axios
            .post("http://127.0.0.1:5000/", {
                "LR": 9,
                "var": a,
                "nameFunction": "LR9_EX3",
            })
            .then(res => {
                document.getElementById('encrypt_message_lr9_ex3').value = res.data.answer
            })
    }
    else {
        alert("Ведённое значение не число!")
    }
}