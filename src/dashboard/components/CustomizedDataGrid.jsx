import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "../internals/data/gridData.jsx";
import ExpedienteModal from "../../components/Modal/ExpedienteVaca.jsx";
//import GetAnimales from '../../services/Animales/GetAnimales.jsx';
import { getAnimalesDeUsuario } from "../Services/GetAnimales.jsx";
import { getCookie } from "../../utils/cookies.js";

export default function CustomizedDataGrid() {
  const [animales, setAnimales] = React.useState([]);
  const idusuario = atob(getCookie("data"));
  React.useEffect(() => {
    async function mostrarAnimales() {
      try {
        const animales = await getAnimalesDeUsuario(idusuario);

        // Función para quitar guiones bajos y convertir la primera letra de cada palabra en mayúscula
        const quitarGuionesBajos = (str) => {
          return str.replace(/_([a-z])/g, (match, p1) => p1.toUpperCase());
        };

        // Convertir los nombres de los animales a minúsculas
        const animalesEnMinusculas = animales[1].map((animal) => ({
          ...animal,
          SEXO: animal.SEXO ? animal.SEXO.toLowerCase() : animal.SEXO, // Convertir a minusculas
          ESPECIE: animal.ESPECIE
            ? quitarGuionesBajos(animal.ESPECIE.toLowerCase())
            : animal.ESPECIE,
        }));

        setAnimales(animalesEnMinusculas);
      } catch (error) {
        console.error("Error al obtener los animales:", error);
      }
    }

    mostrarAnimales();
  }, []);
  const [open, setOpen] = React.useState();
  const [id, setId] = React.useState(null);
  return (
    <>
      <ExpedienteModal id={id} setId={setId} open={open} setOpen={setOpen} />
      <DataGrid
        checkboxSelection
        rows={animales}
        columns={columns}
        onRowClick={(event) => {
          setId(event.id);
          setOpen(true);
        }}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 == 0 ? "even" : "odd"
        }
        initialState={{
          pagination: { paginationModel: { pageSize: 20 } },
        }}
        pageSizeOptions={[10, 20, 50]}
        disableColumnResize
        density="compact"
        slotProps={{
          filterPanel: {
            filterFormProps: {
              logicOperatorInputProps: {
                variant: "outlined",
                size: "small",
              },
              columnInputProps: {
                variant: "outlined",
                size: "small",
                sx: { mt: "auto" },
              },
              operatorInputProps: {
                variant: "outlined",
                size: "small",
                sx: { mt: "auto" },
              },
              valueInputProps: {
                InputComponentProps: {
                  variant: "outlined",
                  size: "small",
                },
              },
            },
          },
        }}
      />
    </>
  );
}
