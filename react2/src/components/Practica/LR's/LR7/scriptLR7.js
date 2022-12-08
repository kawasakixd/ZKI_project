import axios from "axios"


export const ClickEx1 = () => {
    let a = document.getElementById("field_ex7_a").value
    let b = document.getElementById("field_ex7_b").value
    let c = document.getElementById("field_ex7_c").value
    a = Number(a)
    b = Number(b)
    c = Number(c)
    if (!isNaN(Number(a)) || !isNaN(Number(b)) || !isNaN(Number(c))) {
        axios
            .post("http://127.0.0.1:5000/", {
                "LR": 7,
                "a": a,
                "b": b,
                "c": c,
                "nameFunction": "LR7_EX1",
            })
            .then(res => {
                document.getElementById('shifr_message_lr7_ex1').value = res.data.answer
            })
    }
    else {
        alert("Одно из ведённых чисел не число!")
    }

}

export const ClickEx2 = () => {
    let message = document.getElementById("message_lr7_ex2").value
    axios
        .post("http://127.0.0.1:5000/", {
            "LR": 7,
            "message" : message,
            "nameFunction": "LR7_EX2",
        })
        .then(res => {
            document.getElementById('shifr_message_lr7_ex2').value = res.data.answer
        })

}