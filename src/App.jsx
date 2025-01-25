import { Route, useNavigate } from "react-router";
import Navbar from "./components/Navbar";
import { Routes } from "react-router";
import { useLocation } from "react-router";
import { useEffect } from "react";
import Dashboard from "./dashboard/Dashboard";
import SignInSide from "./sign-in-side/SignInSide";
import { getCookie } from "./utils/cookies";
import PCambio_estado from "./pages/PCambio_estado/PCambio_estado";


const Pages = [];

  

function App() {
  const location = useLocation();
  const userInfo = getCookie("data");
  const navigate = useNavigate();

  useEffect(() => {
    userInfo && navigate("/admin/home");
  }, [location.pathname]);

  

  return (
    <>
      {!userInfo ? <Navbar Pages={Pages} /> : null}
      <Routes>
        {userInfo != "" && (

          <Route path="/admin/:seccion" element={<Dashboard />} />
        )}
        {!userInfo && <Route path="/" element={<SignInSide />} />}
        <Route path="/estado" element={<PCambio_estado/>} />

      </Routes>
    </>
  );
}

export default App;
