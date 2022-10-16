import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import s from './Teoriya.module.css';
import {motion} from 'framer-motion/dist/framer-motion'


function Teoriya() {
    return (
        <motion.div className={s.head}
            intial={{width:0}}
            animate={{width:"100%"}}
            exit={{x: window.innerWidth, transition: {duration:0.5}}}>
            Teoriya
        </motion.div>
    );
}

export default Teoriya;
