import { columnsReports, rowsReports } from "@/helpers/data";
import { Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const Reports = () => {
  return (
    <div>
      <div className="flex flex-row justify-between mb-4">
        <h2 className="text-4xl font-bold">Reportes</h2>

        <div className="flex gap-4">
          <Link to="">
            <Button
              color="info"
              variant="contained"
            >
              Nuevo
            </Button>
          </Link>
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
          rows={rowsReports}
          columns={columnsReports}
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

export default Reports;
