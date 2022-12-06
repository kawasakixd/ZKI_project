import axios from "axios"

export const LR5_EX1 = () =>{
    let message = document.getElementById("message_ex5_1").value
    axios
        .post("http://127.0.0.1:5000/",{
            "LR" : 5,
            "nameFunction": "LR5_EX1",
            "message": message,
        })
        .then(res=>{
            document.getElementById("shifr_message_ex5_1").value = res.data
        })
    
}

export const LR5_EX2_1 = () =>{
    let message = document.getElementById("message_ex5_2_1").value
    axios
        .post("http://127.0.0.1:5000/",{
            "LR" : 5,
            "nameFunction": "LR5_EX2_1",
            "message": message,
        })
        .then(res=>{
            document.getElementById("shifr_message_ex5_2_1").value = res.data
        })
    
}

export const LR5_EX2_2 = () =>{
    let message = document.getElementById("message_ex5_2_2").value
    axios
        .post("http://127.0.0.1:5000/",{
            "LR" : 5,
            "nameFunction": "LR5_EX2_2",
            "message": message,
        })
        .then(res=>{
            document.getElementById("shifr_message_ex5_2_2").value = res.data
        })
    
}