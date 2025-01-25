import * as React from "react";

import { alpha } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AppNavbar from "./components/AppNavbar.jsx";
import Header from "./components/Header.jsx";
import MainGrid from "./components/MainGrid.jsx";
import SideMenu from "./components/SideMenu.jsx";
import AppTheme from "../shared-theme/AppTheme";
import { useLocation } from "react-router";
import { set_page } from "../Redux/PAGESLICE..js";
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from "./theme/customizations";
import { PAGINAS_ADMIN } from "../constants/Paginas.d.js";
import { useDispatch, useSelector } from "react-redux";
import Mapa from "../pages/Mapa/Mapa.jsx";
import Usuarios from "../pages/Usuarios/Usuarios.jsx";

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function Dashboard(props) {
  const { page } = useSelector((x) => x.Page);
  const location = useLocation();
  const accion = useDispatch()
  
  React.useEffect(() => {
    accion(set_page(location.pathname.split("/")[2]));
  }, [location.pathname]);

  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: "flex" }}>
        <SideMenu />
        <AppNavbar />
        {/* Main content */}
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: "auto",
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: "center",
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            {page == PAGINAS_ADMIN.HOME ? (
              <>
                <Header />

                <MainGrid />
              </>
            ) : null}
            {page == PAGINAS_ADMIN.MAPA ? (
              <>
                <Mapa />
              </>
            ) : null}
            {page == PAGINAS_ADMIN.USUARIOS ? (
              <>
                <Usuarios />
              </>
            ) : null}
          </Stack>
        </Box>
      </Box>

    </AppTheme>
  );
}
