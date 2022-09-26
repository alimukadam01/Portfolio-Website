import './App.css';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainSection/>
      <AboutMe/>
      <Footer/>    
      <h1>Hello, Mr.Mukadam :)</h1>
      
    </div>
  );
}

export default App;
