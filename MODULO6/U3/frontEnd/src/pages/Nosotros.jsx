import React, {useState, useEffect} from "react";
import "../Styles/pages/nosotros.css";
import openSpark from "../assets/img/Fondos/footer.png";
import axios from "axios";
import DocenteCard from "../components/docenteCard";

const Nosotros = () => {


  const [loading, setLoading] = useState(false);
  const [docente, setDocente] = useState([]);

  useEffect(() => {
    const cargarDocentes = async () => {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/docentes');
      setDocente(response.data);
      setLoading(false)
    };
    cargarDocentes();
  }, []);


  return (
    <div>
      <article className="nosotros">
        <section>
        <img src={openSpark} alt="spark" className="redSpark" />
          <div className=" someWords holder">
            <h1>Nuestro TEAM</h1>
            <div className="text">
              <p>
                Somos un grupo de jovenes de entusiastas del fitness, nos apasiona
                lo que hacemos y creamos un gimnasio donde podemos implementar
                una cultura fisica en donde transmitimos a nuestros clientes la
                importancia de mantenerse activos y realizar ejercicios para
                mejorar sus calidades de vida.
              </p>
            </div>
          </div>

          {/* puedo volver dinamica una parte del JSX con curlis '{}', brackets... y de esa forma utilizar variables para rellenar los campos */}

          <div className="zonaStaff columns">
          { loading ? (
            <p>Cargando...</p>
            ) : (
              
              
              docente.map(item => <DocenteCard key={item.id_docente}  
              nombre={item.nombre + " " + item.apellido} titulo={item.titulo} foto={item.foto}
              instagram= {item.instagramAdd} facebook = {item.facebookAdd} />)
                
                
              )}


            
          </div>








        </section>
      </article>
    </div>
  );
};

export default Nosotros;





            



