import React, { useState } from "react";
import logoFooter from "../assets/img/Logos/craneo_pn.png";
import MapaGoogle from "./MapaGoogle";
import "../Styles/components/footer.css";
import axios from "axios";

const Footer = (props) => {
  
  const initialForm = {
    nombre: "",
    apellido: "",
    mail: "",
    mensaje: "",
  };
  
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };
  const handleSubmit = async e => {
    e.preventDefault();
    setMsg("");
   
   
    setSending(true);
    const response = await axios.post(
      "http://localhost:3000/api/contacto",
      formData
    );
    setSending(false);
    setMsg(response.data.mensaje);
    if (response.data.error === false) {
      setFormData(initialForm);
    }
  };

  return (
    <footer className="footer ">
      
      <MapaGoogle />

      {/* FORMULARIO DE CONTACTO*/}
      <div className="content holder">
        <div className="form">
          <form
            action="/contacto"
            method="post"
            className="formulario"
            onSubmit={handleSubmit}
          >
            <h2>Contacto Rapido</h2>
            <p>
              <input
                type="text"
                name="nombre"
                required
                onChange={handleChange}
                value={formData.nombre}
              />
              <label htmlFor="nombre">Nombre</label>
            </p>
            <p>
              <input
                type="text"
                name="apellido"
                required
                onChange={handleChange}
                value={formData.apellido}
              />
              <label htmlFor="apellido">Apellido</label>
            </p>
            <p>
              <input
                type="text"
                name="mail"
                required
                onChange={handleChange}
                value={formData.mail}
              />
              <label htmlFor="mail">Email</label>
            </p>
            <p>
              <input
                type="text"
                name="mensaje"
                placeholder="Mensaje"
                onChange={handleChange}
                value={formData.mensaje}
              />
              <label htmlFor="mensaje"></label>
            </p>
           
            <p>
              <input type="submit" value="Enviar"  />
            </p>

          </form>
            {sending ? <p>Enviando..</p> : null}
            {msg ? <p>{msg}</p> : null}
        </div>

        {/* FIN FORMULARIO       */}
        <img src={logoFooter} alt="craneo" className="footerImg" />
        <div className="info">
          <div className="horarios">
            <h2>Horarios:</h2>

            <h3>LUNES A VIERNES</h3>
            <p>7:30 - 21:00hs.</p>
            <h3>SABADOS:</h3>
            <p>9:00 - 13:30hs.</p>
          </div>
        </div>
        <p className="copy">
          @2022 Gimnasio Craneo todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
