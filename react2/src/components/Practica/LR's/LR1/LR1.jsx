import React from 'react';
import { Checkbox } from 'antd';
import s from './LR1.module.css';
import {Strenth} from './script/scriptLR1_1'
import {eventForGenerationBtn} from './script/scriptLR1_2'
import {generationArrPass2} from './script/scriptLR1_3'

function LR1() {

    return (
        <div className={s.wrapper}>
            <div className={s.first}>
                <div className={s.firstText}>
                    <b>Первая часть</b>
                </div>
                <div className={s.firstText1}>
                    Задание 1
                </div>
                <div className={s.pole1}>
                    <div>
                        <textarea placeholder='Введите V' rows={1} id='V'></textarea><br />
                        <textarea placeholder='Введите Р' rows={1} id='P'></textarea>
                    </div>
                    <div className={s.middle}>
                    <select id='select'>
                        <option value='6'>Вариант 6</option>
                        <option value='7'>Вариант 7</option>
                    </select>
                    <button onClick={Strenth}>Сгенерировать</button>
                    </div>
                    <textarea placeholder='S =' rows={1} id="S"></textarea>
                </div>
                <div className={s.firstText1}>
                    Задание 2
                </div>
                <div className={s.pole2}>
                    <div className={s.checkBox}>
                        Входящие для пароля:
                        <Checkbox id="Ru">RU</Checkbox>
                        <Checkbox id="ru">ru</Checkbox>
                        <Checkbox id="En">EN</Checkbox>
                        <Checkbox id="en">en</Checkbox>
                        <Checkbox id="num">Num</Checkbox>
                    </div>
                    <div className={s.middle}>
                        <input type="number" max={20} min={1} id='number' />
                        <button onClick={eventForGenerationBtn}>Сгенерировать</button>
                    </div>

                    <textarea placeholder='Пароль' rows={1} id='Pass2'></textarea>
                </div>
            </div>
            <div className={s.second}>
                <div className={s.firstText}>
                    <b>Вторая часть</b>
                </div>
                <div className={s.pole3}>
                    <textarea placeholder='Введите id' rows={1} id="Input_id"></textarea>
                    <button onClick={generationArrPass2}>Сгенерировать</button>
                    <textarea placeholder='Код' rows={1} id="cod"></textarea>
                </div>
            </div>
        </div>
    );
}

export default LR1;
