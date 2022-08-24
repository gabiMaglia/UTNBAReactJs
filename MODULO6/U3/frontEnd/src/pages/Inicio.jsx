import React from "react";
import craneoLogo from "../assets/img/Logos/Craneo_inicio.png";
import Frases from "./Frases";
import Nosotros from "./Nosotros";
import QueHacemos from './QueHacemos'
import "../Styles/pages/inicio.css";
import Cabecera from "../components/Cabecera";
import Contacto from "./Contacto";
import Footer from "../components/Footer";

const Inicio = () => {
  return (
    <section id="inicio">
      <div className="homePage">
        <img src={craneoLogo} alt="Craneo" className="mainLogo"></img>
      </div>
      <Cabecera />
      <Frases />
      <Nosotros />
      <Cabecera />
      <QueHacemos />
      <Cabecera />
      <Contacto/>
      <Footer />
      
    </section>
  );
};

export default Inicio;
