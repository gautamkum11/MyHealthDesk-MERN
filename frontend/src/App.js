import React from "react";
import {Route, Routes} from "react-router-dom";
import Homepage from "./screens/Homepage";
import Hospitalloginpage from "./screens/Hospitallogin"
import Userloginpage from "./screens/Userlogin"
import Hospitaldashboard from "./screens/Hospitaldashboard"
import Userdashboard from "./screens/Userdashboard"
import Newrecord from "./screens/Newrecord";
import Viewrecord from "./screens/Viewrecords";
import Editrecord from "./screens/Editrecord";
import Addpatient from "./screens/Addpatient";

function App() {
  return (
    <Routes>
      <Route exact path = "/" element = {<Homepage />} />
      <Route path = "/hospitallogin" element  = {<Hospitalloginpage />} />
      <Route path = "/userlogin" element  = {<Userloginpage />} />
      <Route path = "/hospitaldashboard" element  = {<Hospitaldashboard />} />
      <Route path = "/userdashboard" element  = {<Userdashboard />} />
      <Route path = "/newrecord" element  = {<Newrecord />} />
      <Route path = "/viewrecord" element  = {<Viewrecord />} />
      <Route path = "/editrecord" element  = {<Editrecord />} />
      <Route path = "/addpatient" element  = {<Addpatient />} />
    </Routes>
  );
}

export default App;