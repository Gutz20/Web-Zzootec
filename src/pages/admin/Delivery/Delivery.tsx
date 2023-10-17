import { columnsDelivery, rowsDelivery } from "@/helpers/data";
import { Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const Delivery = () => {
  return (
    <div>
      <div className="flex flex-row justify-between mb-4">
        <h2 className="text-4xl font-bold">Delivery</h2>

        <div className="flex gap-4">
          <Link to="/dashboard/delivery/1">
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
          {/* <button className="border border-sky-600 text-sky-600 py-2 px-4 hover:bg-sky-600 hover:text-white rounded-xl transition-colors">
            Nuevo
          </button>
          <button className="border border-green-600 text-green-600 py-2 px-4 hover:bg-green-600 hover:text-white rounded-xl transition-colors">
            Guardar
          </button>
          <button className="border border-slate-600 text-slate-600 py-2 px-4 hover:bg-slate-600 hover:text-white rounded-xl transition-colors">
            Editar
          </button>
          <button className="border border-red-600 text-red-600 py-2 px-4 hover:bg-red-600 hover:text-white rounded-xl transition-colors">
            Eliminar
          </button> */}
        </div>
      </div>

      <div>
        <DataGrid
          rows={rowsDelivery}
          columns={columnsDelivery}
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

export default Delivery;
