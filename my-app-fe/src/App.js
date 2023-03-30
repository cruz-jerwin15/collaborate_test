import logo from './logo.svg';
import './App.css';
import Home from './components/Body/Home/Home';
import AboutUs from './components/Body/AboutUs/AboutUs';
import ContactUs from './components/Body/ContactUs/ContactUs';
import Sample from './components/Body/Sample/Sample';
import Portfolio from './components/Body/Portfolio/Portfolio';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="portfolio" element={<Portfolio/>} />
          <Route path="sample" element={<Sample/>} />
          
      </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
