import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "../Styles/components/nav.css";
import ModalLogIn from "./ModalLogIn";



const Nav = () => {
  
  const [showMenu, setShowMenu] = useState(false);
  const checkMenu = () => {return !showMenu ? setShowMenu(showMenu) : setShowMenu(!showMenu) };

  const [showModal, setShowModal] = useState(false); 
  const openModal = () => {setShowModal (true)};
  const checkModal = () => {return !showModal ? setShowModal(showModal) : setShowModal(!showModal) };

  
  return (
    <header className="header">
      <div className="holder centroheader">
        <figure className="banner">
          <NavLink
            end
            to="/"
            activeclassname="active"
            title="Gimnasio Craneo"
          >

            <h1>
              <p className="logoText">
                <span className="mainLogo">GIMNASIO CRANEO</span>
              </p>
            </h1>
          </NavLink>
        </figure>

        <div className="mmovil" onClick={() => {setShowMenu(!showMenu); checkModal()}} >
          <i className={!showMenu ?"icon-menu": "icon-cancel"}></i>
        </div>
        
        {
        <nav className="nav" style={showMenu ? {top : '100%' } : {top : '-800%' }}>
          
          <a
            onClick={() => {checkMenu()}}
            href="#inicio"
            activeclassname="active"
            className="button"
            title="Inicio"
          >
            INICIO
          </a>
         
          <a
            onClick={() => {checkMenu()}}
            href="#nosotros"
            activeclassname="active"
            className="button"
            title="Nosotros"
          >
            NOSOTROS
          </a>
          <a
            onClick={() => {checkMenu()}}
            href="#quehacemos"
            activeclassname="active"
            className="button"
            title="Que hacemos"
          >
            QUE HACEMOS
          </a>
          <a
            onClick={() => {checkMenu()}}
            href="#contacto"
            activeclassname="active"
            className="button"
            title="Contacto"
          >
            CONTACO
          </a>
           <i 
            onClick={() => {checkMenu() ; openModal()}}

            className="button logBtn"
            title="Login"
          >
            LOGIN
          </i> 

         <ModalLogIn
          show = {showModal}
          setShow = {setShowModal}
         />
          <NavLink end to="/*"></NavLink>

          <a
            className="socialMedia button "
            href="http://www.instagram.com/Gimnasio_Craneo"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <i className="icon-instagramnormal "></i>
          </a>
        </nav>
        }
     
      </div>
    </header>
  );
};

export default Nav;
