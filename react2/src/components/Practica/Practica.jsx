import { Tabs } from 'antd';
import React from 'react';
import s from './Practica.module.css';
import {motion} from 'framer-motion/dist/framer-motion'
import LR1 from './LR\'s/LR1/LR1';
import LR2 from './LR\'s/LR2/LR2';
import LR3 from './LR\'s/LR3/LR3';
import LR4 from './LR\'s/LR4/LR4';
import LR5 from './LR\'s/LR5/LR5';
import LR6 from './LR\'s/LR6/LR6';
import LR7 from './LR\'s/LR7/LR7';
import LR8 from './LR\'s/LR8/LR8';
import LR9 from './LR\'s/LR9/LR9';


function Practica() {

    const items = [
        { label: 'LR1', key: 'item-1', className: "tabItem1", children: <LR1 /> },
        { label: 'LR2', key: 'item-2', children: <LR2 /> },
        { label: 'LR3', key: 'item-3', children: <LR3 /> },
        { label: 'LR4', key: 'item-4', children: <LR4 /> },
        { label: 'LR5', key: 'item-5', children: <LR5 /> },
        { label: 'LR6', key: 'item-6', children: <LR6 /> },
        { label: 'LR7', key: 'item-7', children: <LR7 /> },
        { label: 'LR8', key: 'item-8', children: <LR8 /> },
        { label: 'LR9', key: 'item-9', children: <LR9 /> },
        { label: 'LR10', key: 'item-10', children: <div>LR10</div> },
        { label: 'LR11', key: 'item-11', children: <div>LR11</div> }
    ]

    const [tabPane] = React.useState(true);

    return (
        <motion.div className={s.head}
            intial={{width:0}}
            animate={{width:"100%"}}
            exit={{x: window.innerWidth, transition: {duration:0.5}}}
            >
            <Tabs
                tabPosition='top'
                tabBarGutter={70}
                animated={{
                    tabPane,
                }}
                className={s.tabs}
                type='card'
                centered
                items={items}>
                
            </Tabs>
        </motion.div>
    );
}

export default Practica;



// <div className={s.links}>
//                 { ButtonsElement }
//             </div>
//             <div className={s.line}></div>
//             <div className={s.main}>
//                 <Routes>
//                     <Route path="/lb1" element={<div>lb1</div>} />
//                     <Route path="/lb2" element={<div>lb2</div>} />
//                     <Route path="/lb3" element={<div>lb3</div>} />
//                     <Route path="/lb4" element={<div>lb4</div>} />
//                     <Route path="/lb5" element={<div>lb5</div>} />
//                     <Route path="/lb6" element={<div>lb6</div>} />
//                     <Route path="/lb7" element={<div>lb7</div>} />
//                     <Route path="/lb8" element={<div>lb8</div>} />
//                     <Route path="/lb9" element={<div>lb9</div>} />
//                     <Route path="/lb10" element={<div>lb10</div>} />
//                     <Route path="/lb11" element={<div>lb11</div>} />
//                 </Routes>
//             </div>
