import { AnimatePresence } from "framer-motion";
import { useParams } from "react-router";
import Home from "../pages/home/Home";
import MotionPageCont from "./MotionPageCont";
import Productos from "../pages/home/Productos";
import { Contactanos } from "../pages/home/Contactanos";
import Dashboard from "../dashboard/Dashboard.jsx"

const pages = {
  SCROLL: (
    <MotionPageCont key={"Home"}>
      <Home />
    </MotionPageCont>
  ),
  PRODUCTOS: (
    <MotionPageCont key={"Productos"}>
      <Productos />
    </MotionPageCont>
  ),
  CONTACTENOS: (
    <MotionPageCont key={"Contactenos"}>
      <Contactanos />
    </MotionPageCont>
  ),
  DASHBOARD: (
    <MotionPageCont key={"Login"}>
      <Dashboard />
    </MotionPageCont>
  ),
};

const MotionPage = () => {
  const { page } = useParams();

  return (
    <>
      <AnimatePresence mode="wait">
        {pages[`${page.toUpperCase()}`]}
      </AnimatePresence>
    </>
  );
};

export default MotionPage;
