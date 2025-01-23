import { Route } from "react-router";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import { Routes } from "react-router";
import { useLocation } from "react-router";

import MotionPage from "./components/MotionPage";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Dashboard from "./dashboard/Dashboard";
import SignInCard from "./sign-in-side/components/SignInCard";
import SignInSide from "./sign-in-side/SignInSide";

const Pages = [];

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // location.pathname == "/" && navigate("/components/scroll");

    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {location.pathname != "/admin" && <Navbar Pages={Pages} />}
      <Routes>
        <Route path="/components/:page" element={<MotionPage />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/" element={<SignInSide />} />
      </Routes>
    </>
  );
}

export default App;
