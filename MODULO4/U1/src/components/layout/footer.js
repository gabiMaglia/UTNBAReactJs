import '../../styles/components/layout/footer.css'

const Footer = (props) => {
    return (
        <footer className='holder'>
            <div className="text-muted">
                © 2022 Gimnasio Craneo
                </div>

                <div className="icons">

                <a target="blank" href="#"><i className="fa-brands fa-facebook"></i></a>
                <a target="blank" href="#"><i className="fa-brands fa-instagram"></i></a>
                <a target="blank" href="#"><i className="fa-solid fa-address-card"></i></a>
            </div>
      </footer>
    );
}

export default Footer;