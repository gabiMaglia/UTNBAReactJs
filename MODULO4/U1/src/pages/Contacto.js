import '../styles/components/pages/Contacto.css'

const Contacto = (props) => {
    return (
       
        <main className="mainContacto holder" >
         
            <div className='contact-container'>
                <div className="form">
                    <h2>Contacto Rapido</h2>
                    <form action="" method="" className="formulario">
                        <p>
                            <label for="nombre">Nombre</label>
                            <input type="text" name=""/>
                            <label for="nombre">Apellido</label>
                            <input type="text" name=""/>
                        </p>

                        <p>
                            <label for="nombre">Email</label>
                            <input type="text" name=""/>
                        </p>
                        <p>
                            <label for="nombre">Mensaje</label>
                            <textarea></textarea>
                        </p>
                        <p>
                            <input type="submit" value="Enviar"/>
                        </p>
                    </form>
                </div>
            
                <div className="mapa">
                        <iframe
                            title="Map" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.5196318928797!2d-60.70042695659365!3d-32.85796829727085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b653e07f769a1b%3A0xbf47165369f8e5f1!2sJ.%20M.%20Estrada%20327%2C%20S2152BIG%20Granadero%20Baigorria%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1652835138477!5m2!1ses!2sar"
                            width="500"
                            height="350" 
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
            </div>      
     
    </main>

    );
}

export default Contacto;