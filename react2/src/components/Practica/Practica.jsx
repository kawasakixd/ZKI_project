import { Route, Routes } from 'react-router-dom';
import ButtonItem from './ButtonItem/ButtonItem';
import s from './Practica.module.css';

function Practica(props) {

    let ButtonsElement = props.buttons.map(bt => <ButtonItem id={bt.id} />)

    return (
        <div className={s.head}>
            <div className={s.links}>
                { ButtonsElement }
            </div>
            <div className={s.line}></div>
            <div className={s.main}>
                <Routes>
                    <Route path="/lb1" element={<div>lb1</div>} />
                    <Route path="/lb2" element={<div>lb2</div>} />
                    <Route path="/lb3" element={<div>lb3</div>} />
                    <Route path="/lb4" element={<div>lb4</div>} />
                    <Route path="/lb5" element={<div>lb5</div>} />
                    <Route path="/lb6" element={<div>lb6</div>} />
                    <Route path="/lb7" element={<div>lb7</div>} />
                    <Route path="/lb8" element={<div>lb8</div>} />
                    <Route path="/lb9" element={<div>lb9</div>} />
                    <Route path="/lb10" element={<div>lb10</div>} />
                    <Route path="/lb11" element={<div>lb11</div>} />
                </Routes>
            </div>
        </div>
    );
}

export default Practica;
