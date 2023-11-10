import {
  getCategoriesRequest,
  deleteCategoryRequest,
  deleteMultipleCategoryRequest,
} from "@/api/categories";
import { columnsDelivery, rowsDelivery } from "@/helpers/data";
import { Button } from "@mui/material";
import { DataGrid, GridRowId, GridToolbar } from "@mui/x-data-grid";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Delivery = () => {
  return (
    <div>
      <div className="flex flex-row justify-between mb-4">
        <h2 className="text-4xl font-bold">Delivery</h2>

        <div className="flex gap-4">
          <Link to="/dashboard/delivery/1">
            <Button color="info" variant="contained">
              Nuevo
            </Button>
          </Link>
          <Button color="success" variant="contained">
            Guardar
          </Button>
          <Button color="inherit" variant="contained">
            Editar
          </Button>
          <Button color="error" variant="contained">
            Eliminar
          </Button>
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
