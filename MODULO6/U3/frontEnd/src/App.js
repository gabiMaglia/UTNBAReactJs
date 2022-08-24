import MainPage from "./components/MainPage";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init()
  return (
    <div>    
        <MainPage/>
    </div>
  );
}

export default App;
