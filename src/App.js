
import './App.css';
import NavrBar from './Components/NavBar';
import Carouselimage from './Components/Carouselimage';
import Cards from './Components/Cards';
import FormMain from './Components/FormMain';
import Footer from './Components/Footer';
import Info from './Components/Info';
import InformationCard from './Components/InformationCard';
function App() {
  
  return (
    <div className="App">
   
      <NavrBar/>
      <Carouselimage/>
      <Cards/>
      <InformationCard/>
      <Info/>
      <FormMain/>
      <Footer/>
    </div>
  );
}

export default App;
