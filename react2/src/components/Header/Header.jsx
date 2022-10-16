import React from "react";
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

function Header() {
    return (
        <div className={s.head}>
            <div className={s.wrapper}>
                <NavLink to="/main" className={({ isActive }) => isActive ? s.active : ''}>ZKI</NavLink>
                <NavLink to="/teoriya">Teoriya</NavLink>
                <NavLink to="/practica">Practica</NavLink>
            </div>
        </div>
    );
}

export default Header;
