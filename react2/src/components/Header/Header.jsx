import { NavLink, Route, Routes } from 'react-router-dom';
import s from './Header.module.css';


function Header() {
    return (
        <div className={s.head}>
            <div className={s.wrapper}>
                <NavLink to="/">ZKI</NavLink>
                <NavLink to="/">Teoriya</NavLink>
                <NavLink to="/">Practica</NavLink>
            </div>
        </div>
    );
}

export default Header;
