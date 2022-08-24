import React from 'react'
import openSpark from "../assets/img/Fondos/footer.png";
import closeSpark from "../assets/img/Fondos/header.png";
import '../Styles/components/cabecera.css'

const Cabecera = () => {
  return (
    <div>
        <img src={closeSpark} alt="spark" className="redSpark" />

        <div className="cabecera">
        </div>

       <img src={openSpark} alt="spark" className="redSpark" />
    </div>
  )
}

export default Cabecera