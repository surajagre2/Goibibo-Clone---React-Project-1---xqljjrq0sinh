import "../styles/App.css";
import "../styles/Home.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Hotels from "./Hotels";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { useEffect } from "react";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar/>}>
              <Route index element={<Home/>}></Route>  
              <Route path="flights" element={<Home/>}></Route> 
              <Route path="trains" element={<Home/>}></Route> 
              <Route path="hotels" element={<Home/>}></Route> 
              <Route path="cabs" element={<Home/>}></Route> 
              <Route path="bus" element={<Home/>}></Route> 
              <Route path="holidays" element={<Home/>}></Route>   
            </Route>  
        </Routes>
      </BrowserRouter>
    </>
   
  )
}

export default App;
