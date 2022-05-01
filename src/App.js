
import Contact from "./Contact";
import "./css/style.css";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Navbar from "./Navbar";
import Services from "./Services";
import Slider from "./Slider";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider />
      {/* <Gallery/> */}
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
