import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import First from "./components/FrontPages/FirstPage";
import CreateHealthInsurance from "./components/HealthInsurance/createHealthInsurance";
import HealthInsurance from "./components/HealthInsurance/HealthInsurance";
import UpdateHealthInsurance from "./components/HealthInsurance/updateHealthInsurance";
import CreateLifeInsurance from "./components/LifeInsurance/createlifeInsurance";
import LifeInsurance from "./components/LifeInsurance/lifeInsurance";
import LifeUpdateInsurance from "./components/LifeInsurance/updatelifeInsurance";
import AutoInsurance from "./components/AutomobileInsurance/autoInsurance";
import CreateautoInsurance from "./components/AutomobileInsurance/creatautoInurance";
import UpdateautoInsurance from "./components/AutomobileInsurance/updateautoInsurance";
import ViewHealth from "./components/ApplyForHealth/ViewHealthInsurance";
import Userhealthinsurance from "./components/ApplyForHealth/userHealthForm";
import ViewAuto from "./components/ApplyForAutoMobile/ViewAutoInsurance";
import Userautoinsurance from "./components/ApplyForAutoMobile/userAutoForm";
import ViewLife from "./components/ApplyForLife/ViewLifeInsurance";
import Userlifeinsurance from "./components/ApplyForLife/userLifeForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import HealthUser from "./components/AdminView/UserHealth";
import LifeUser from "./components/AdminView/UserLife";
import AutoUser from "./components/AdminView/UserAuto";
import AvailableLifeInsurance from "./components/AdminView/AvailableLife";
import AvailableHealthInsurance from "./components/AdminView/AvailableHealth";
import AvailableAutoInsurance from "./components/AdminView/AvailableAuto";
import Login from "./components/Login/login";
import Signup from "./components/Signup/signup";
import Home from "./components/Home/homepage";
import Role from "./components/Roles/roles";
import AdminLogin from "./components/Login/loginadmin";
import ManagerLogin from "./components/Login/loginmanager";
import AdminPage from "./components/FrontPages/AdminPage";
import ManagerPage from "./components/FrontPages/ManagerPage";
import UnAuthorized from "./components/UnAuthorized/UnAuthorized";

function App() {
  const [count, setCount] = useState(0);

  // const navigate=useNavigate();
  return (
    <>
      <BrowserRouter>
        <Routes>
        
        <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/loginadmin" element={<AdminLogin />}></Route>
          <Route path="/loginmanager" element={<ManagerLogin />}></Route>
          <Route path="/role" element={<Role />}></Route>
          {localStorage.getItem("user") === "true" && (
            <>
            <Route path="/applyforinsurance" element={<First />}></Route>
            <Route
                path="/viewHealthInsurance"
                element={<ViewHealth />}
              ></Route>
              <Route
                path="/ApplyForHealth/:id"
                element={<Userhealthinsurance />}
              ></Route>
              <Route path="/viewAutoInsurance" element={<ViewAuto />}></Route>
              <Route
                path="/ApplyForAuto/:id"
                element={<Userautoinsurance />}
              ></Route>
              <Route path="/viewLifeInsurance" element={<ViewLife />}></Route>
              <Route
                path="/ApplyForLife/:id"
                element={<Userlifeinsurance />}
              ></Route>

             
            </>
          )}
         {localStorage.getItem("admin") === "true" && (
            <>
           
              <Route path="/adminhome" element={<AdminPage />}></Route>
              <Route path="/ViewHealthUsers" element={<HealthUser />}></Route>
              <Route path="/ViewLifeUsers" element={<LifeUser />}></Route>
              <Route path="/ViewAutoUsers" element={<AutoUser />}></Route>
              <Route
                path="/ViewAvailableLife"
                element={<AvailableLifeInsurance />}
              ></Route>
              <Route
                path="/ViewAvailableHealth"
                element={<AvailableHealthInsurance />}
              ></Route>
              <Route
                path="/ViewAvailableAuto"
                element={<AvailableAutoInsurance />}
              ></Route>
          
              
            </>
          )}

{localStorage.getItem("manager") === "true" && (
            <>
              <Route path="/managerhome" element={<ManagerPage />}></Route>
              <Route path="/health" element={<HealthInsurance />}></Route>
              <Route
                path="/createhealthInsurance"
                element={<CreateHealthInsurance />}
              ></Route>
              <Route
                path="/updatehealthInsurance/:id"
                element={<UpdateHealthInsurance />}
              ></Route>
              <Route path="/lifeInsurance" element={<LifeInsurance />}></Route>
              <Route
                path="/createlifeInsurance"
                element={<CreateLifeInsurance />}
              ></Route>
              <Route
                path="/updatelifeInsurance/:id"
                element={<LifeUpdateInsurance />}
              ></Route>
              <Route path="/autoInsurance" element={<AutoInsurance />}></Route>
              <Route
                path="/createautoInsurance"
                element={<CreateautoInsurance />}
              ></Route>
              <Route
                path="/updateautoInsurance/:id"
                element={<UpdateautoInsurance />}
              ></Route>              
            </>
          )}
          
          {localStorage.getItem("user") !== "true" || localStorage.getItem("admin") !== "true" || localStorage.getItem("manager") !== "true" &&  (
             <Route path="/*" element={<Navigate to="/unauthorized" />} />
            // navigate('/unauthorized')
          )}
          {/* Unauthorized access */}
          <Route path="/unauthorized" element={<UnAuthorized />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
