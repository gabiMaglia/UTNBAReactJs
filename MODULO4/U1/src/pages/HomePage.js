import '../styles/components/pages/HomePage.css'
import craneoLogo from '../assets/img/logo/Craneo_black.jpg'

const HomePage = (props) => {
    return (
        <main className="mainIndex ">
            <img src={craneoLogo} alt = 'Craneo'></img>
        </main>

    );
}

export default HomePage;