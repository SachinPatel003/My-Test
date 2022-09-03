import "./App.css";
import Talent from "./Components/Talent";
import Nav from "./Components/Nav";
import Fan from "./Components/Fan";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div style={{"fontFamily" :'Poppins'}} className="bg-black min-vh-100 d-flex justify-content-center align-items-center ">
        <div className="bg-dark  d-flex justify-content-center align-items-center flex-column py-3 rounded-5 col-10 col-xxl-6 text-white">
          <BrowserRouter>
            <Nav/>
            <Routes>
              <Route path="/" element={<Fan />} />
              <Route path="/Talent" element={<Talent />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
