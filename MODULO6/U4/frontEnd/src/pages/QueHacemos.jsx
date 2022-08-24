import React from 'react'
import '../Styles/pages/queHacemos.css'

import kinesio from '../assets/img/Actividades/KinesioRehab.png'
import lifting from '../assets/img/Actividades/lifting.png'
import pilates from '../assets/img/Actividades/pilates.png'
import rutinas from '../assets/img/Actividades/personalizada.png'

const QueHacemos = () => {
  const listaDeServicios = [
    {
      id: 1,
      imagen: lifting,
      titulo: "Levantamiento de Pesas"
    },
    {
      id: 1,
      imagen: kinesio,
      titulo: "Rehabilitacion Kinesiologica"
    },
    {
      id: 1,
      imagen: pilates,
      titulo: "Pilates"
    },
    {
      id: 1,
      imagen: rutinas,
      titulo: "Rutinas personalizadas"
    }
  ]
  
  return (
    <section className='mainQueHacemos' id='quehacemos'>
      <h1 className='titActividades holder'>Nuestras Actividaes</h1>
      
      <div className='listaActividades'>    

        {
          listaDeServicios.map((item, index) => (
          <div className="actividades" key={index}>
            <figure>
              <img src= {item.imagen} alt={item.titulo} />
            </figure>
            <h3>{item.titulo}</h3>
          </div>

          ))
        }
       
        </div>
    
    </section>
  )
}

export default QueHacemos