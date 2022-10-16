import React from 'react';
import { Checkbox } from 'antd';
import s from './LR1.module.css';

function LR1() {

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };


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
                        <textarea placeholder='Введите S' rows={1}></textarea><br />
                        <textarea placeholder='Введите Р' rows={1}></textarea>
                    </div>
                    <button>Сгенерировать</button>
                    <textarea placeholder='S =' rows={1}></textarea>
                </div>
                <div className={s.firstText1}>
                    Задание 2
                </div>
                <div className={s.pole2}>
                    <div className={s.checkBox}>
                        <Checkbox onChange={onChange}>First</Checkbox>
                    </div>
                    <button>Сгенерировать</button>
                    <textarea placeholder='Пароль' rows={1}></textarea>
                </div>
            </div>
            <div className={s.second}>
                <div className={s.firstText}>
                    <b>Вторая часть</b>
                </div>
                <div className={s.pole3}>
                    <textarea placeholder='Введите id' rows={1}></textarea>
                    <button>Сгенерировать</button>
                    <textarea placeholder='Код' rows={1}></textarea>
                </div>
            </div>
        </div>
    );
}

export default LR1;
