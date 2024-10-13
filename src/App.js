import Hero from './layouts/hero/hero';
import Header from './layouts/Header/Header';
import './styles/App.css';
import './styles/fonts.css';
import './styles/global.css';
import SliderText from './components/SliderText/SliderText';
import WebAppSolution from './components/WebAppSolution/WebAppSolution';
import Process from './components/Process/Process';
import Technology from './components/Technology/Technology';
import BrandSlider from './components/BrandSlider/BrandSlider';
import Client from './components/client/client';
import FormSection from './components/FormSection/FormSection';
import Footer from './layouts/Footer/Footer';
import ClientSlider from './components/ClientSlider/ClientSlider';

function App() {
  return (
    <div className="App">
      <div className="background__image">
        <div className="container ">
          <Header />
          <Hero />
        </div>
      </div>
      <SliderText />
      <div className="container">
        <WebAppSolution />
      </div>
      <Process />
      <Technology />
      <BrandSlider />
      <div className="container">
        <Client />
      </div>
      <ClientSlider />
      <div className="container">
        <FormSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
