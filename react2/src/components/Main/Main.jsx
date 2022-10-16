import React from 'react';
import s from './Main.module.css';
import { motion } from 'framer-motion/dist/framer-motion'

function Main() {
    return (
        <motion.div className={s.head}
            intial={{width:0}}
            animate={{width:"100%"}}
            exit={{x: window.innerWidth, transition: {duration:0.5}}}
        >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi quam iste quia sunt cumque est recusandae ab placeat repellat dicta labore totam reiciendis, rerum at asperiores voluptas aliquam natus mollitia!
        </motion.div>
    );
}

export default Main;
