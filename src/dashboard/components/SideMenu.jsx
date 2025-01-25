import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SelectContent from "./SelectContent.jsx";
import MenuContent from "./MenuContent.jsx";
import CardAlert from "./CardAlert.jsx";
import OptionsMenu from "./OptionsMenu.jsx";
import { getCookie } from "../../utils/cookies.js";
import { useEffect, useState } from "react";
import GetUsuarios, {
  GetUsuario,
} from "../../services/Usuarios/GetUsuarios.jsx";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: "border-box",
  },
});

export default function SideMenu() {
  const userInfo = atob(getCookie("data"));
  const [usuario, setUsuario] = useState({
    NOMBRE: "",
    CORREO: "",
  });

  useEffect(() => {
    (async () => {
      
      
      const usuario = await GetUsuario(userInfo);

      if (usuario[0] == 200) {
        setUsuario(usuario[1]);
      }
    })();
  }, [userInfo]);
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", md: "block" },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: "background.paper",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          mt: "calc(var(--template-frame-height, 0px) + 4px)",
          p: 1.5,
        }}
      >
        <SelectContent />
      </Box>
      <Divider />
      <Box
        sx={{
          overflow: "auto",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MenuContent />
        {/* <CardAlert /> */}
      </Box>
      <Stack
        direction="row"
        sx={{
          p: 2,
          gap: 1,
          alignItems: "center",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Avatar sizes="small" sx={{ width: 36, height: 36 }} src="error" alt={usuario.NOMBRE}>
         
        </Avatar>
        <Box sx={{ mr: "auto" }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, lineHeight: "16px" }}
          >
            {usuario.NOMBRE}
          </Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            {usuario.CORREO}
          </Typography>
        </Box>
        <OptionsMenu />
      </Stack>
    </Drawer>
  );
}
