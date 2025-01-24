import { Route } from "react-router";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import { Routes } from "react-router";
import { useLocation } from "react-router";


import { useEffect } from "react";

import Dashboard from "./dashboard/Dashboard";

import SignInSide from "./sign-in-side/SignInSide";

const Pages = [];

function App() {
  const location = useLocation();
  

  useEffect(() => {
    

    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {location.pathname == "/" && <Navbar Pages={Pages} />}
      <Routes>
        <Route path="/admin/:parte" element={<Dashboard />} />
        <Route path="/" element={<SignInSide />} />
      </Routes>
    </>
  );
}

export default App;
