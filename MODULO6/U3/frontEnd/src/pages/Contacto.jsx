import React from "react";
import "../Styles/pages/contacto.css";
import craneo from "../assets/img/Logos/craneo_black.png";
const Contacto = () => {
  return (
    <section className="mainContacto" id="contacto" >
      <div className="holder">
        <div className="tituloContacto ">
          <figure className="title-box">
            <img src={craneo} className="logoContacto" alt="Creaneo" />
            <figcaption>
              Veni a conocernos o contactanos atraves de cualquiera de estos
              medios!
            </figcaption>
          </figure>
        </div>

        <div className="contactContainer">
          <div className="datosContacto">
            <a target='blank' href="https://api.whatsapp.com/send?phone=3417206873&text=Consultanos!">
              <i className="icon-telefono"></i>
              <div>
                <h3>LLamanos</h3>
                <p>341-57864763</p>
              </div>
            </a>
            <a target='blank' href="https://api.whatsapp.com/send?phone=3417206873&text=Consultanos!" rel="noopener noreferrer">
              <i className="icon-whatsappnormal"></i>
              <div>
                <h3>Contactanos</h3>
                <p>341-4223456</p>
              </div>
            </a>
            <a target='blank' href="*">
              <i className="icon-email"></i>
              <div>
                <h3>Escribenos</h3>
                <p>gimnasioCraneo@gmail.com</p>
              </div>
            </a>
            <a target='blank' href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.5196318928797!2d-60.70042695659365!3d-32.85796829727085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b653e07f769a1b%3A0xbf47165369f8e5f1!2sJ.%20M.%20Estrada%20327%2C%20S2152BIG%20Granadero%20Baigorria%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1652835138477!5m2!1ses!2sar"  rel="noopener noreferrer">
              <i className="icon-ubicacion"></i>
              <div>
                <h3>Podes encontrarnos en</h3>
                <p>JM Estrada 327</p>
              </div>
            </a>
            <a target='blank' href="http://www.instagram.com/Gimnasio_Craneo"
            rel="noopener noreferrer">
              <i className=" icon-instagramnormal"></i>
              <div>
                <h3>Siguenos en Instagram</h3>
                <p>/gimnsioCraneo</p>
              </div>
            </a>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Contacto;
