import React from 'react';
import s from './LR6.module.css';
import {EX6_1_shif, EX6_1_raz} from "./scriptLR6_1"
import {EX6_2_shif, EX6_2_raz} from "./scriptLR6_2"


function LR6() {
    return (
        <div className={s.wrapper}>
            <div className={s.first}>
                <div className={s.firstText}>
                    <b>Задание 1</b>
                </div>
                <div className={s.pole1}>
                    <div className={s.right}>
                        <textarea placeholder='Введите p' rows={1} id="field_ex6_1_p"></textarea>
                        <textarea placeholder='Введите q' rows={1} id="field_ex6_1_q"></textarea>
                        <textarea placeholder='Введите e' rows={1} id="field_ex6_1_e"></textarea>
                        <textarea placeholder='Введите message' rows={1} id="message_ex6_1"></textarea>
                    </div>
                    <div className={s.middle}>
                        <button onClick={EX6_1_shif}>Зашифровать</button>
                        <button onClick={EX6_1_raz}>Расшифровать</button>
                    </div>
                    <textarea placeholder='Encrypt message' rows={1} id="shifr_message_ex6_1"></textarea>
                </div>
            </div>
            <div className={s.second}>
                <div className={s.firstText}>
                    <b>Задание 2</b>
                </div>
                <div className={s.pole1}>
                    <div className={s.right}>
                        <textarea placeholder='Введите p' rows={1} id="field_ex6_2_p"></textarea>
                        <textarea placeholder='Введите g' rows={1} id="field_ex6_2_g"></textarea>
                        <textarea placeholder='Введите x' rows={1} id="field_ex6_2_x"></textarea>
                        <textarea placeholder='Введите k' rows={1} id="field_ex6_2_k"></textarea>
                        <textarea placeholder='Введите message' rows={1} id="message_ex6_2"></textarea>
                    </div>
                    <div className={s.middle}>
                        <button onClick={EX6_2_shif}>Зашифровать</button>
                        <button onClick={EX6_2_raz}>Расшифровать</button>
                    </div>
                    <textarea placeholder='Encrypt message' rows={1} id="shifr_message_ex6_2"></textarea>
                </div>
            </div>
        </div>
    );
}

export default LR6;
