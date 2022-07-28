import "../../styles/components/layout/nav.css";
import craneoLogo from '../../assets/img/logo/Craneo_black.jpg'

import { Link } from "react-router-dom";

const Nav = (props) => {
  return (



    <nav className="navbar d-flex navbar-expand-lg d-flex     ">
            <img src={craneoLogo} width="20" alt="CraneoGym" />
      <div className=" holder container-fluid ">
        <div className = 'img-responsive'>

        
        </div>

        <button
          className="navbar-toggler"
          type="button bg-light text-light"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-8 text-secondary">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-light me-0"
                >
                  Inicio
                </button>
              </Link>
            </li>
            <li>
              <Link
                to="QueHacemos"
                href="queHacemos.html"
                className="nav-link px-8 text-white"
              >
                <button
                  type="button"
                  className="btn btn-sm btn-outline-light me-0"
                >
                  Que Hacemos?
                </button>
              </Link>
            </li>
            <li>
              <Link
                to="nosotros"
                href="nosotros.html"
                className="nav-link px-8 text-white"
              >
                <button
                  type="button"
                  className="btn btn-sm btn-outline-light me-0"
                >
                  Nosotros
                </button>
              </Link>
            </li>
            <li>
              <Link
                to="contacto"
                href="/contacto.html"
                className="nav-link px-8 text-white"
              >
                <button
                  type="button"
                  className="btn btn-sm btn-outline-light me-0"
                >
                  Contacto
                </button>
              </Link>
            </li>
          </ul>

          <div className="text-end justify-content-md-end">
            <Link to="Login" className="btn btn-lg" href="login.html">
              <button
                type="button"
                className="btn btn-sm btn-outline-light me-0"
              >
                iniciar Sesion
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
