import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "pages/Home/Home";
import RAT from "pages/RAT/RAT";
import PurpleShift from 'pages/PurpleShift/PurpleShift';
import SystemsTTRPG from 'pages/SystemsTTRPG/SystemsTTRPG';
import Navbar from 'components/Navbar/Navbar';
import ROH from 'pages/ROH/ROH';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/RAT" element={<RAT />} />
          <Route path="/project/PurpleShift" element={<PurpleShift />} />
          <Route path='/project/SystemsTTRPG' element={<SystemsTTRPG />} />
          <Route path='/project/ROH' element={<ROH />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
