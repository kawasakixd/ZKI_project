import React from 'react';
import s from './LR3.module.css';
import { FirstRequestEx1 } from "./scriptLR3"
import { FirstRequestEx2 } from "./scriptLR3"
import { FirstRequestEx3 } from "./scriptLR3"

function LR3() {
    return (
        <div className={s.wrapper}>
            <div className={s.first}>
                <div className={s.firstText}>
                    <b>Задание 1</b>
                </div>
                <div className={s.pole1}>
                    <textarea type="text" placeholder='Text for shifr' id='basicValue' name="message" rows={1}></textarea>
                    <div className={s.middle}>
                        <input type="number" max={18} min={1} id='number' name='countK' />
                        <button onClick={FirstRequestEx1}>Сгенерировать</button>
                    </div>
                    <textarea placeholder='Encrypt text' readOnly id='answerforfirst' rows={1}></textarea>
                </div>
            </div>
            <br />
            <div className={s.first}>
                <div className={s.firstText}>
                    <b>Задание 2</b>
                </div>
                <div className={s.pole1}>
                    <div>
                        <textarea type="text" placeholder='Text for shifr' id='basicValueForSecond' name="message" rows={1}></textarea><br />
                        <textarea type="text" placeholder='A' id='A' name="a" rows={1}></textarea><br />
                        <textarea type="text" placeholder='B' id='B' name="b" rows={1}></textarea><br />
                        <textarea type="text" placeholder='C' id='C' name="c" rows={1}></textarea><br />
                    </div>
                    <div className={s.middle}>
                        <button  onClick={FirstRequestEx2}>Зашифровать</button>
                    </div>
                    <textarea placeholder='Encrypt text' readOnly id='answerforsecond' rows={1}></textarea>
                </div>
            </div>
            <div className={s.first}>
                <div className={s.firstText}>
                    <b>Задание 3</b>
                </div>
                <div className={s.pole1}>
                    <textarea type="text" placeholder='Text for encrypt' id='basicValueForThird' rows={1}></textarea>
                    <div className={s.middle}>
                        <select id="selectinChooseForThird">
                            <option value="True">Вариант 6</option>
                            <option value="False">Вариант 7</option>
                        </select>
                        <button onClick={FirstRequestEx3}>Зашифровать</button>
                    </div>
                    <textarea placeholder='Encrypt text' readOnly id='AnswerForThird' rows={1}></textarea>
                </div>
            </div>
        </div>
    );
}

export default LR3;