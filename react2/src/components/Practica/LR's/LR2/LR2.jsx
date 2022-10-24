import React from 'react';
import s from './LR2.module.css';
import { f1 } from './scriptLR2_1';
import { f2 } from './scriptLR2_2'
 
function LR2() {

    return (
        <div className={s.wrapper}>
            <div className={s.first}>
                <div className={s.firstText}>
                    <b>Задание 1</b>
                </div>
                <div className={s.pole1}>
                    <textarea type="text" placeholder='Text for shifr' id='basicValue' rows={1}></textarea>
                    <div className={s.middle}>
                    <button onClick={f1}>Зашифровать</button>
                    </div>
                    <textarea placeholder='Shifr text' readOnly id='zashifrovan' rows={1}></textarea>
                </div>
            </div>
            <br />
            <div className={s.first}>
                <div className={s.firstText}>
                    <b>Задание 2</b>
                </div>
                <div className={s.pole1}>
                    <textarea type="text" placeholder='Text for shifr' id='basicValueForSecond' rows={1}></textarea>
                    <div className={s.middle}>
                        <select className="selectinChoose">
                            <option value="1">5х5 1</option>
                            <option value="2">5х5 2</option>
                            <option value="3">5х5 3</option>
                            <option value="4">6х6 1</option>
                            <option value="5">6х6 2</option>
                            <option value="6">6х6 3</option>
                        </select>
                        <button onClick={f1}>Зашифровать</button>
                    </div>
                    <textarea placeholder='Shifr text' readOnly id='zashifrovanForSecond' rows={1}></textarea>
                </div>
            </div>
        </div>
    );
}

export default LR2;