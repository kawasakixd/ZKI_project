import React from 'react';
import s from './LR5.module.css';
import { LR5_EX1 } from './scriptLR5';
import { LR5_EX2_1 } from './scriptLR5';
import { LR5_EX2_2 } from './scriptLR5';


function LR5() {

    return (
        <div className={s.wrapper}>
            <div className={s.first}>
                <div className={s.firstText}>
                    <b>Первая часть</b>
                </div>
                <div className={s.pole1}>
                    <textarea placeholder='Введите message' rows={1} id="message_ex5_1"></textarea>
                    <button onClick={LR5_EX1}>Сгенерировать</button>
                    <textarea placeholder='Encrypt message' rows={1} id="shifr_message_ex5_1"></textarea>
                </div>
            </div>
            <div className={s.second}>
                <div className={s.firstText}>
                    <b>Вторая часть</b>
                </div>
                <div className={s.firstText1}>
                    Задание 1
                </div>
                <div className={s.pole1}>
                    <textarea placeholder='Введите message' rows={1} id="message_ex5_2_1"></textarea>
                    <button onClick={LR5_EX2_1}>Сгенерировать</button>
                    <textarea placeholder='Encrypt message' rows={1} id="shifr_message_ex5_2_1"></textarea>
                </div>
                <div className={s.firstText1}>
                    Задание 2
                </div>
                <div className={s.pole1}>
                    <textarea placeholder='Введите message' rows={1} id="message_ex5_2_2"></textarea>
                    <button onClick={LR5_EX2_2}>Сгенерировать</button>
                    <textarea placeholder='Encrypt message' rows={1} id="shifr_message_ex5_2_2"></textarea>
                </div>
            </div>
        </div>
    );
}

export default LR5;
