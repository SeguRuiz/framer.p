import { Route, useNavigate, Routes, Navigate } from "react-router";
import Navbar from "./components/Navbar";
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
 

  // Rutas privadas - Componente que protege las rutas
  const PrivateRoute = ({ children }) => {
    if (!userInfo) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

  return (
    <>
      {/* Si el usuario no está autenticado, se dirige al login */}
      {!userInfo && Navigate("/")}

      <Routes>
        {/* Ruta pública - Página de inicio de sesión */}
        <Route path="/" element={<SignInSide />} />

        {/* Ruta privada para /estado */}
        <Route path="/estado" element={<PrivateRoute><PCambio_estado /></PrivateRoute>} />

        {/* Ruta privada para /admin/:seccion */}
        <Route path="/admin/:seccion" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
    </>
  );
}

export default App;
