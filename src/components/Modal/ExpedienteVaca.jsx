import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Dialog,
  DialogActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import MedicalInformationRoundedIcon from "@mui/icons-material/MedicalInformationRounded";
import MonitorHeartRoundedIcon from "@mui/icons-material/MonitorHeartRounded";
import MaleRoundedIcon from "@mui/icons-material/MaleRounded";
import ScaleRoundedIcon from "@mui/icons-material/ScaleRounded";
import CakeRoundedIcon from "@mui/icons-material/CakeRounded";
import ThermostatRoundedIcon from "@mui/icons-material/ThermostatRounded";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import ExploreOffRoundedIcon from "@mui/icons-material/ExploreOffRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
const ExpedienteModal = ({
  open = false,
  maxWidth = 30,
  fullWidth = false,
  setOpen,
  setId,
  id = null,
}) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
          setId(null);
        }}
        maxWidth={maxWidth}
        fullWidth={fullWidth}
      >
        <Card sx={{ width: "vh" }}>
          <CardHeader
            title={"Nombre animal"}
            subheader={"Especie del animal"}
          />
          <CardMedia sx={{ height: "30vh" }} />

          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            gap={"70px"}
          >
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                flexDirection: "column",
              }}
            >
              <CardHeader
                title={"Estado del animal"}
                avatar={<MedicalInformationRoundedIcon />}
              />
              <CardHeader
                title={"Ritmo cardiaco"}
                avatar={<MonitorHeartRoundedIcon />}
              />

              <CardHeader title={"Edad"} avatar={<CakeRoundedIcon />} />
              <CardHeader title={"ubicacion"} avatar={<FmdGoodRoundedIcon />} />
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                flexDirection: "column",
              }}
            >
              <CardHeader
                title={"Temperatura"}
                avatar={<ThermostatRoundedIcon />}
              />

              <CardHeader
                title={"Ritmo cardiaco"}
                avatar={<MaleRoundedIcon />}
              />
              <CardHeader title={"Peso"} avatar={<ScaleRoundedIcon />} />
              <CardHeader
                title={"fuera de los limites"}
                avatar={<ExploreOffRoundedIcon />}
              />
            </Box>
          </Stack>
        </Card>

        <DialogActions>
          <Button startIcon={<FileDownloadRoundedIcon />}>
            Descargar expediente
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ExpedienteModal;
