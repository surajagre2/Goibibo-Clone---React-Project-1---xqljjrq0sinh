import "../styles/App.css";
import "../styles/Home.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Hotels from "./Hotels";
import Findcity from "./Findcity";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect,useState } from "react";
import SignUp from "./SignUp"
import UserProvider from "./Provider/UserProvider";
import MyContext from "../AllContext";
import SearchFlight from "./SearchFlight";
import SignIn from "./SignIn";


function App() {
  const [returndate, setReturnDate] = useState(false);
  const [faretype, setFareType] = useState("regular");
  const [passengerClass, setPassengerClass] = useState("economy");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [fromcity, setFromCity] = useState();
  const [tocity,setToCity] = useState();
  const [date,setDate]=useState();
  const [trip, setTrip] = useState("one-way");
  const [flightSearchData,setFlightSearchData]=useState();
  const [registration,setRegistration]=useState(false);
  const [login,setLogin]=useState(false);
  const [fromIATACode,setfromIATACode]=useState();
  const [toIATACode,setToIATACode]=useState();

  
  const handleRegistration=()=>{
    console.log("Helloooooo");
    setRegistration(true);
  }
  return (
    <>  
      <MyContext.Provider value={{returndate,setReturnDate,
      faretype,setFareType,passengerClass, setPassengerClass,adults,setAdults,
      children,setChildren,infants,setInfants,
      fromcity,setFromCity,tocity,setToCity,date,setDate,trip,setTrip,
      flightSearchData,setFlightSearchData,fromIATACode,setfromIATACode,
      toIATACode,setToIATACode,registration,setRegistration,login,setLogin}}>
          <UserProvider>
            <BrowserRouter>
              <Navbar handleRegistration={handleRegistration}/>
              <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="flights" element={<Home />}></Route>
                <Route path="trains" element={<Home />}></Route>
                <Route path="hotels" element={<SignUp />}></Route>
                <Route path="cabs" element={<SignIn />}></Route>
                <Route path="bus" element={<Home />}></Route>
                <Route path="holidays" element={<Home />}></Route>
                <Route path="search" element={<SearchFlight />}></Route>
              </Routes>
            </BrowserRouter>
          </UserProvider>
        </MyContext.Provider>
    </>
  );
}

export default App;
