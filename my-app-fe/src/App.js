import logo from './logo.svg';
import './App.css';
import Home from './components/Body/Home/Home';
import AboutUs from './components/Body/AboutUs/AboutUs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about-us" element={<AboutUs/>} />
          
      </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
