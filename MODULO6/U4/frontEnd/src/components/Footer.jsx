import React from "react";
import logoFooter from "../assets/img/Logos/craneo_pn.png";
import "../Styles/components/footer.css";

const Footer = () => {
  

  return (
    <footer className="footer ">
      <div className="mapa">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.5196318928797!2d-60.70042695659365!3d-32.85796829727085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b653e07f769a1b%3A0xbf47165369f8e5f1!2sJ.%20M.%20Estrada%20327%2C%20S2152BIG%20Granadero%20Baigorria%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1652835138477!5m2!1ses!2sar"
          width="100%"
          height="300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="content holder">
        <div className="form">
          <form action="" method="post" className="formulario">
            <h2>Contacto Rapido</h2>
            <p>
              <input type="text" name="" required />
              <label htmlFor="nombre" >Nombre</label>
            </p>
            <p>
              <input type="text" name="" required />
              <label htmlFor="apellido">Apellido</label>
            </p>
            <p>
              <input type="text" name="" required />
              <label htmlFor="email">Email</label>
            </p>
            <p>
              <input type='text' placeholder="Mensaje" />
              <label htmlFor="mensaje"></label>
            </p>
            <p>
              <input type="submit" value="Enviar" />
            </p>
          </form>
        </div>
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
