import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AnimatedComponents from "./components/AnimatedComponents/AnimatedComponents";

function App() {
  return (
    <div className="app">
      <Header />
      <AnimatedComponents />
      <Footer />
    </div>
  );
}

export default App;