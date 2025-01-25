import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ userInfo }) => {
  // Si el usuario no está autenticado (userInfo está vacío o no existe), redirige a la página de login
  if (!userInfo) {
    return <Navigate to="/" />;
  }

  return <Outlet />;  // Si está autenticado, renderiza las rutas hijas
};
