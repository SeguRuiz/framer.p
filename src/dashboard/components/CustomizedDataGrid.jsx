import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "../internals/data/gridData.jsx";
import ExpedienteModal from "../../components/Modal/ExpedienteVaca.jsx";
export default function CustomizedDataGrid() {
  const [open, setOpen] = React.useState();
  const [id, setId] = React.useState(null);
  return (
    <>
      <ExpedienteModal id={id} setId={setId} open={open} setOpen={setOpen} />
      <DataGrid
        checkboxSelection
        rows={rows}
        columns={columns}
        onRowClick={(event) => {
          setId(event.id);
          setOpen(true);
        }}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
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
