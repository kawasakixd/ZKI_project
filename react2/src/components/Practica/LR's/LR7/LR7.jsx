import React from 'react';
import s from './LR7.module.css';
import { ClickEx1, ClickEx2 } from './scriptLR7';


function LR7() {
    return (
        <div className={s.wrapper}>
            <div className={s.first}>
                <div className={s.firstText}>
                    <b>Задание 1</b>
                </div>
                <div className={s.pole1}>
                    <div className={s.right}>
                        <textarea className={s.textEx7} placeholder='Введите a' rows={1} id="field_ex7_a"></textarea>
                        <textarea className={s.textEx7} placeholder='Введите b' rows={1} id="field_ex7_b"></textarea>
                        <textarea className={s.textEx7} placeholder='Введите c' rows={1} id="field_ex7_c"></textarea>
                    </div>
                    <div className={s.middle}>
                        <button onClick={ClickEx1}>Зашифровать</button>
                    </div>
                    <textarea readOnly className={s.textEx7} placeholder='Encrypt message' rows={1} id="shifr_message_lr7_ex1"></textarea>
                </div>
            </div>
            <div className={s.second}>
                <div className={s.firstText}>
                    <b>Задание 2</b>
                </div>
                <div className={s.pole1}>
                    <textarea className={s.textEx7} placeholder='Введите message' rows={1} id="message_lr7_ex2"></textarea>
                    <button onClick={ClickEx2}>Зашифровать</button>
                    <textarea readOnly className={s.textEx7} placeholder='Encrypt message' rows={1} id="shifr_message_lr7_ex2"></textarea>
                </div>
            </div>
        </div>
    );
}

export default LR7;
