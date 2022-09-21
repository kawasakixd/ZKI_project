import { NavLink } from 'react-router-dom';
import s from "../Practica.module.css"

function ButtonItem(props) {
    return(
        <NavLink to={"lb"+ props.id} className={({isActive}) => isActive? s.active : ''}>Лабораторная работа {props.id}</NavLink>
    );
}

export default ButtonItem;
