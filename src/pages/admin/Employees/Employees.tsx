import { columnsEmployees, rowsEmployees } from "@/helpers/data";
import { Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const Employees = () => {
  return (
    <div>
      <div className="flex flex-row justify-between mb-4">
        <h2 className="text-4xl font-bold">Empleados</h2>

        <div className="flex gap-4">
          <Button
            color="info"
            variant="contained"
          >
            Nuevo
          </Button>
          <Button
            color="success"
            variant="contained"
          >
            Guardar
          </Button>
          <Button
            color="inherit"
            variant="contained"
          >
            Editar
          </Button>
          <Button
            color="error"
            variant="contained"
          >
            Eliminar
          </Button>
        </div>
      </div>

      <div>
        <DataGrid
          rows={rowsEmployees}
          columns={columnsEmployees}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
        />
      </div>
    </div>
  );
};

export default Employees;
