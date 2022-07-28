import '../styles/components/pages/Nosotros.css'

const Nosotros = (props) => {
    return (
        <main className="mainNosotros">
            <div className="aboutUs">
                <h2>Acerca de nosotros</h2>
                <p>
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                    ab illo inventore veritatis et quasi architecto beatae vitae dicta
                </p>
            </div>
        
            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                
                    <div className="persona">
                        <img src="img/nosotros/jp.png" alt="Juan Pablo Martinez" />
                        <h5>Juan Pablo Martinez</h5>
                        <h6>Docente</h6>
                        <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>
                
                    <div className="persona">
                        <img src="img/nosotros/mc.png" alt="Marina Chamorro" />
                        <h5>Marina Chamorro</h5>
                        <h6>Docente</h6>
                        <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>
                </div>    
            </div>
      </main> 
    );
}

export default Nosotros;