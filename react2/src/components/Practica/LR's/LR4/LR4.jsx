import React, { useState, useEffect, useRef} from 'react';
import s from './LR4.module.css';
import axios from "axios"
import { FirstRequestEx1 } from "./scriptLR4"
import { Ex2 } from "./scriptLR4"

function LR2() {

    const [data, setData] = useState({})
    const [value, setValue] = useState({})
    const [attempt, setAttempt] = useState(0)
    const [num, setNum] = useState(Math.trunc(Math.random() * (9999-1000) + 1000))

    let Call = () =>{
        if(attempt < 11){
            setAttempt(attempt+1)
            if(Ex2(num)){
                alert("Вы угадали загаданное число: " + num +"\nЗагаданно новое число")
                setNum(Math.trunc(Math.random() * (9999-1000) + 1000))
                setAttempt(0)
            }
        }
        else{
            alert("Вы не угадали с 10 попытки. Загаданное число:" + num +"\nЗагаданно новое число")
            setNum(Math.trunc(Math.random() * (9999-1000) + 1000))
            setAttempt(0)
        }
    }

    let FirstEx = () => { 
        FirstRequestEx1(data, value)
    }


    useEffect(() =>{
        axios
            .post("http://127.0.0.1:5000/",{
            "LR" : 4,
            "nameFunction": "LR4_EX1"
        })
        .then(res=>{
            setData(res.data)
        })
    },[])

    return (
        <div className={s.wrapper}>
            <div className={s.first}>
                <div className={s.firstText}>
                    <b>Задание 1</b>
                </div>
                <div className={s.pole1}>
                    <div className={s.checkBox}>
                        <select className={s.selector} id="selector" onChange={e => {setValue(e.target.value)}}>
                            <option disabled selected>Choose value</option>
                            <option value="answer_1" >From 3 to 12, whole</option>
                            <option value="answer_2">{'From the set {-3, 0, 6, 9, 12, 15}'}</option>
                            <option value="answer_3">From 3 to 12, real</option>
                            <option value="answer_4">From -2.3 to 10.7 in steps of 0.1</option>
                            <option value="answer_5">{"From the set {-30; 10; 63; 59; 120; 175}"}</option>
                            <option value="answer_6">{"From the set {1; 0.1; 0.01; ...; 10-15}"}</option>
                        </select>
                    </div>
                    <div className={s.middle}>
                        <button onClick={FirstEx}>Сгенерировать</button>
                    </div>
                    <textarea type="text" placeholder="Answer" id='Answer' rows={1} readOnly></textarea>
                </div>
            </div>
            <div className={s.first}>
                <div className={s.firstText}>
                    <b>Задание 2</b>
                </div>
                <div className={s.pole1}>
                    <textarea type="text" placeholder='Enter a four-digit number' id='basicValue' className={s.UnderArea} rows={1}></textarea>
                    <div className={s.middle}>
                        <button onClick={Call}>Угадать</button>
                    </div>
                    <textarea placeholder='Cows and bulls' readOnly id='AnswerCowAndBulls'  rows={1}></textarea>
                </div>
            </div>
        </div>
    );
}

export default LR2;