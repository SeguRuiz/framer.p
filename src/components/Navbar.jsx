import {
  AppBar,
  Container,
  Typography,
  Toolbar,
  Avatar,
  IconButton,
  Slide,
  createTheme,
  ThemeProvider,
  useTheme,
  useMediaQuery,
  Divider,
  Card,
  CardHeader,
} from "@mui/material";
import { useScrollTrigger } from "@mui/material";
import DeveloperBoardSharpIcon from "@mui/icons-material/DeveloperBoardSharp";
import BugReportIcon from "@mui/icons-material/BugReport";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router";
import { Logo } from "../sign-in-side/components/CustomIcons";
import vacalogo from '../Img/vacalogo.png'


const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "rgba(17, 17, 26, 0) 0px 1px 0px;",
        },
      },
    },
  },
});

function HideOnScroll({ window, children }) {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

const Navbar = ({ window, currentPath, Pages = [] }) => {
  const theme2 = useTheme();
  const es_PantallaPequeña = useMediaQuery(theme2.breakpoints.down("sm"));
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <HideOnScroll window={window}>
        <AppBar
          position="fixed"
          sx={{ backgroundColor: "rgba(0,0,0,0)", color: "#191c20" }}
         
        >
          <Container maxWidth="xl" sx={{ width: "100%", display: "flex" }}>
            <Toolbar sx={{ gap: "15px" }} disableGutters>
               <img
                     width={100}
                     height={80}
                    src={vacalogo}
                   ></img>

              {!es_PantallaPequeña && (
                <Typography
                  component={"h1"}
                  noWrap
                  sx={{
                    fontWeight: 700,
                    letterSpacing: "2px",
                    fontSize: "22px",
                    flexGrow: 3,
                  
                  }}
                >
                 <Logo/>
                </Typography>
              )}
            </Toolbar>

            <Toolbar sx={{ flexGrow: 1, display: "flex", gap: "20px" }}>
              {Pages.map((x) => (
                <Typography
                  key={x.path}
                  sx={{
                    opacity: currentPath == x.path ? 1 : 0.6,

                    fontWeight: 650,
                    padding: "1px 6px 1px 6px",
                    borderRadius: "5px",
                    backgroundColor: currentPath == x.path && "#5875a8",
                    color: currentPath == x.path && "#ffffff",
                    cursor: "pointer",
                    ":hover": currentPath != x.path && {
                      backgroundColor: "#e7e8ee",
                      color: "#191c20",
                      opacity: 1,
                    },
                  }}
                  onClick={() => {
                    navigate(x.path);
                  }}
                >
                  {x.nombre}
                </Typography>
              ))}
            </Toolbar>
            <Toolbar
              sx={{
                flexGrow: 0.5,
                display: "flex",
                justifyContent: "end",
                gap: "5px",
              }}
            >
              {/* <IconButton>
                <BugReportIcon sx={{ color: "#44474e" }} fontSize="medium" />
              </IconButton>
              <IconButton>
                <EmailIcon sx={{ color: "#44474e" }} fontSize="medium" />
              </IconButton>
              <Divider orientation="vertical" variant="middle" flexItem /> */}
              <Card
                variant="outlined"
                sx={{ backgroundColor: "#f9f9ff", border: "none" }}
              >
                {/* <CardHeader
                  avatar={
                    <Avatar
                      sx={{
                        justifySelf: "end",
                        backgroundColor: "#415f91",
                        color: "#ffffff",
                      }}
                      variant="rounded"
                    >
                      Ls
                    </Avatar>
                  }
                  title={"Luis Jose"}
                  subheader={"Administrador"}
                  slotProps={{
                    title: {
                      color: "#191c20",
                      fontWeight: 600,
                    },
                  }}
                ></CardHeader> */}
              </Card>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </ThemeProvider>
  );
};

export default Navbar;
