import { NavLink, Route, Routes } from 'react-router-dom';
import s from './Header.module.css';


function Header() {
    return (
        <div className={s.head}>
            <div className={s.wrapper}>
                <NavLink to="/main">ZKI</NavLink>
                <NavLink to="/teoriya">Teoriya</NavLink>
                <NavLink to="/practica">Practica</NavLink>
            </div>
        </div>
    );
}

export default Header;
