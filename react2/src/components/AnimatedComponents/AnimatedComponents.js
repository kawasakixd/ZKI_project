import React from "react";
import Practica from '../Practica/Practica'
import Main from '../Main/Main'
import Teoriya from '../Teoriya/Teoriya'
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion/dist/framer-motion'

function AnimatedComponents() {
  const location = useLocation()
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/practica/*" element={<Practica />} />
          <Route path="/main/*" element={<Main />} />
          <Route path="/teoriya/*" element={<Teoriya />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default AnimatedComponents;