import axios from "axios"

export let FirstRequestEx1 = () => {
    let message = document.getElementById("basicValue").value;
    let countK = document.getElementsByName("countK")[0].value
    console.log({
        "nameFunction" : "LR3_EX1",
        "message": message,
        "countK": countK
    })

    axios
        .post("http://127.0.0.1:5000/",{
            "LR" : 3,
            "message": message, 
            "nameFunction": "LR3_EX1",
            "countK":countK
        })
        .then(res=>{
            document.getElementById('answerforfirst').value = res.data.answer
        })
}

export let FirstRequestEx2 = () => {
    let message = document.getElementById("basicValueForSecond").value;
    let a = document.getElementById("A").value;
    let b = document.getElementById("B").value;
    let c = document.getElementById("C").value;

        console.log({
        "nameFunction" : "LR3_EX2",
        "message" : message,
        "a" : a,
        "b" : b,
        "c" : c
    })

    axios
        .post("http://127.0.0.1:5000/",{
            "LR" : 3,
            "nameFunction" : "LR3_EX2",
            "message" : message,
            "a" : a,
            "b" : b,
            "c" : c
        })
        .then(res=>{
            document.getElementById('answerforsecond').value = res.data.answer
        })
}

export let FirstRequestEx3 = () => {
    let message = document.getElementById("basicValueForThird").value;
    let flag = document.getElementById("selectinChooseForThird").value
        console.log({
        "nameFunction" : "LR3_EX3",
        "message" : message,
        "flag" : flag
    })

    axios
        .post("http://127.0.0.1:5000/",{
            "LR" : 3,
            "message": message, 
            "nameFunction": "LR3_EX3",
            "flag" : flag
        })
        .then(res=>{
            document.getElementById('AnswerForThird').value = res.data.answer
        })
}