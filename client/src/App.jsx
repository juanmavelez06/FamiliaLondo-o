import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import FormularioCita from "./components/Formulariocitas.js/Formulario";
import Carusel from "./components/AppCarousel/AppCarousel";
import MyNavbar from "./components/AppHeader/AppHeader";
import Home from "./components/AppHome/AppHome";
import Biografia from "./components/AppBiografia/AppBiografia";
import Contact from "./components/AppContacto/AppContacto";
import Footer from "./components/AppFooter/AppFooter";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Carusel />
      <Home />
      <Biografia/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
