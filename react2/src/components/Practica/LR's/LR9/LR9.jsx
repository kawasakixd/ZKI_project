import React from 'react';
import s from './LR9.module.css';
import { ClickEx1, ClickEx2, ClickEx3 } from './scriptLR9';


function LR9() {
    return (
        <div className={s.wrapper}>
            <select className={s.middle} id="selectinChooseForThird">
                <option value="true">Вариант 6</option>
                <option value="false">Вариант 7</option>
            </select>
            <div className={s.first}>
                <div className={s.firstText}>
                    <b>Задание 1</b>
                </div>
                <div className={s.pole1}>
                    <div className={s.middle}>
                        <button onClick={ClickEx1}>Получить шифр</button>
                        <textarea readOnly className={s.textEx7} placeholder='Encrypt message' rows={1} id="encrypt_message_lr9_ex1"></textarea>
                    </div>
                </div>
            </div>
            <div className={s.second}>
                <div className={s.firstText}>
                    <b>Задание 2</b>
                </div>
                <div className={s.pole1}>
                    <div className={s.middle}>
                        <button onClick={ClickEx2}>Получить шифр</button>
                        <textarea readOnly className={s.textEx7} placeholder='Encrypt message' rows={1} id="encrypt_message_lr9_ex2"></textarea>
                    </div>
                </div>
            </div>
            <div className={s.second}>
                <div className={s.firstText}>
                    <b>Задание 3</b>
                </div>
                <div className={s.pole1}>
                    <div className={s.middle}>
                        <button onClick={ClickEx3}>Получить шифр</button>
                        <textarea readOnly className={s.textEx7} placeholder='Encrypt message' rows={1} id="encrypt_message_lr9_ex3"></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LR9;
