import * as React from "react";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer, { drawerClasses } from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import MenuButton from "./MenuButton";
import MenuContent from "./MenuContent";
import CardAlert from "./CardAlert";
import { getCookie } from "../../utils/cookies";
import { setCookie } from "../../utils/cookies";
import ListItemIcon, { listItemIconClasses } from "@mui/material/ListItemIcon";
import { useNavigate } from "react-router";
import ListItemText from "@mui/material/ListItemText";
import GetUsuarios, {
  GetUsuario,
} from "../../services/Usuarios/GetUsuarios.jsx";
import { MenuItem } from "@mui/material";

function SideMenuMobile({ open, toggleDrawer }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate= useNavigate()
   const userInfo = atob(getCookie("data"));
    const [usuario, setUsuario] = React.useState({
      NOMBRE: "",
      CORREO: "",
    });
     React.useEffect(() => {
        (async () => {
          
          
          const usuario = await GetUsuario(userInfo);
    
          if (usuario[0] == 200) {
            setUsuario(usuario[1]);
          }
        })();
      }, [userInfo]);
        const logOut = () => {
          setAnchorEl(null);
          setCookie("data", null, 0);
          navigate("/");
        };
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        [`& .${drawerClasses.paper}`]: {
          backgroundImage: "none",
          backgroundColor: "background.paper",
        },
      }}
    >
      <Stack
        sx={{
          maxWidth: "70dvw",
          height: "100%",
        }}
      >
        <Stack direction="row" sx={{ p: 2, pb: 0, gap: 1 }}>
          <Stack
            direction="row"
            sx={{ gap: 1, alignItems: "center", flexGrow: 1, p: 1 }}
          >
            <Avatar sizes="small" sx={{ width: 36, height: 36 }} src="error" alt={usuario.NOMBRE}>
         
         </Avatar>
           
            <Typography component="p" variant="h6">
              {usuario.NOMBRE}
            </Typography>
          </Stack>
 
        </Stack>
        <Divider />
        <Stack sx={{ flexGrow: 1 }}>
          <MenuContent />
          <Divider />
        </Stack>
       
        <Stack sx={{ p: 2 }}>
        <MenuItem
          onClick={logOut}
          sx={{
            [`& .${listItemIconClasses.root}`]: {
              ml: "auto",
              minWidth: 20,
            },
          }}
        >
          <ListItemText>Cerrar Sesion</ListItemText>
          <ListItemIcon>
            <LogoutRoundedIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
        </Stack>
      </Stack>
    </Drawer>
  );
}

SideMenuMobile.propTypes = {
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func.isRequired,
};

export default SideMenuMobile;
