import React from "react";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";


import 'aos/dist/aos.css';

import Contacto from "../pages/Contacto";
import Error404 from "../pages/Error404";
import Inicio from "../pages/Inicio";
import Nosotros from "../pages/Nosotros";
import QueHacemos from "../pages/QueHacemos";
import Nav from "./Nav";

const Main = () => {
  return (
    <>
      <Router>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Inicio />} />
            <Route exact path="/nosotros" element={<Nosotros />} />
            <Route exact path="/quehacemos" element={<QueHacemos />} />
            <Route exact path="/contacto" element={<Contacto />} />  
            <Route exact path="/*" element={<Error404 />} />
          </Routes>
        </Router>
    </>
  );
};

export default Main;
