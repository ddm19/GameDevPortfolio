import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "pages/Home/Home";
import RAT from "pages/RAT/RAT";



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/RAT" element={<RAT />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
