import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter } from "react-router-dom";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Icons from "./components/Icons/Icons";

function App() {
  return (
    <BrowserRouter>
      <div className="dark">
        <Header />
        <div className="main-content">
          <Home />
          <About />
          <Service />
          <Portfolio />
          <Contact />
          <Icons />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
