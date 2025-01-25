import {
  Box,
  Button,
  Card,
  CardHeader,
  CardMedia,
  Dialog,
  DialogActions,
  Stack,
} from "@mui/material";

import { useEffect, useState } from "react";
import MedicalInformationRoundedIcon from "@mui/icons-material/MedicalInformationRounded";
import MonitorHeartRoundedIcon from "@mui/icons-material/MonitorHeartRounded";
import MaleRoundedIcon from "@mui/icons-material/MaleRounded";
import ScaleRoundedIcon from "@mui/icons-material/ScaleRounded";
import CakeRoundedIcon from "@mui/icons-material/CakeRounded";
import ThermostatRoundedIcon from "@mui/icons-material/ThermostatRounded";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import ExploreOffRoundedIcon from "@mui/icons-material/ExploreOffRounded";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import { GetAnimal } from "../../services/Animales/GetAnimales";
const ExpedienteModal = ({
  open = false,
  maxWidth = 30,
  fullWidth = false,
  setOpen,
  setId,
  id = null,
}) => {
  const [animalData, setAnimalData] = useState({
    NOMBRE: "",
    ESTADO: "",
    SEXO: "",
    PESO: "",
    ESPECIE: "",
    EDAD: 0,
    RM: 0,
    TEMPERATURA: "",
    UBICACION: {
      LAT: "0",
      LNG: "0",
    },

    PAZO_LOS_LIMITES: 0,
  });
  useEffect(() => {
    (async () => {
      if (id) {
        const [status, animal] = await GetAnimal(id);

        if (status == 200) {
          setAnimalData(animal);
        }
      }
    })();
  }, [id]);
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
        <Card sx={{
         
        }}>
          <CardHeader
            title={animalData.NOMBRE}
            subheader={animalData.ESPECIE}
          />
          <CardMedia sx={{ height: "30vh" }} />

          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            gap={"77px"}
          >
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                flexDirection: "column",
              }}
            >
              <CardHeader
                title={animalData.ESTADO}
                avatar={<MedicalInformationRoundedIcon />}
              />
              <CardHeader
                title={animalData.RM}
                avatar={<MonitorHeartRoundedIcon />}
              />

              <CardHeader title={animalData.EDAD} avatar={<CakeRoundedIcon />} />
              <CardHeader title={`${animalData.UBICACION.LAT}-${animalData.UBICACION.LNG}`} avatar={<FmdGoodRoundedIcon />} />
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                flexDirection: "column",
              }}
            >
              <CardHeader
                title={animalData.TEMPERATURA}
                avatar={<ThermostatRoundedIcon />}
              />

              <CardHeader
                title={animalData.SEXO}
                avatar={<MaleRoundedIcon />}
              />
              <CardHeader
                title={animalData.PESO}
                avatar={<ScaleRoundedIcon />}
              />
              <CardHeader
                title={animalData.PAZO_LOS_LIMITES}
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
