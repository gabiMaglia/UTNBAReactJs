import React from 'react'
import '../Styles/components/docenteCard.css'
const docenteCard = (props) => {
    const { key, nombre, apellido, titulo, foto, facebook, instagram } = props



    return (

        <div className="card" key={key}>

            <div className="cont">
                <figure className="imgStaff">
                    <div className="title">
                        <div className="text">

                            <h2>{nombre} {apellido}</h2>
                            <p>{titulo}</p>
                           
                            <div className="mainbox">
                                <div className="cc">
                                    <img 
                                        src={foto} 
                                        alt={apellido} 
                                        className='picture'/>
                                    <div className="socialStuff">
                                        <a
                                            href={'http://www.facebook.com/'+facebook}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="icon-facebook"></i>
                                        </a>
                                        <a
                                            href={'http://www.instagram.com/'+instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="icon-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </figure>
            </div>
            {/* <div dangerouslySetInnerHTML={{__html: "body"}} />; */}
            {/* <hr /> */}
        </div>
    )
}

export default docenteCard


