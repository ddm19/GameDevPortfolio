import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "pages/Home/Home";
import RAT from "pages/RAT/RAT";
import PurpleShift from 'pages/PurpleShift/PurpleShift';



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/RAT" element={<RAT />} />
          <Route path="/project/PurpleShift" element={<PurpleShift />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
