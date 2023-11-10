import {
  getCategoriesRequest,
  deleteCategoryRequest,
  deleteMultipleCategoryRequest,
} from "@/api/categories";
import { columnsEmployees, rowsEmployees } from "@/helpers/data";
import { Button } from "@mui/material";
import { DataGrid, GridRowId, GridToolbar } from "@mui/x-data-grid";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Employees = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [selectedRowIds, setSelectedRowIds] = useState<GridRowId[]>([]);
  const { data: employees, isLoading } = useQuery({
    queryFn: async () => await getCategoriesRequest(),
    queryKey: ["employees"],
  });

  const { mutateAsync: deleteUserMutation } = useMutation({
    mutationFn: deleteCategoryRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });

  const { mutateAsync: deleteMultUserMutation } = useMutation({
    mutationFn: deleteMultipleCategoryRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });

  const rowsEmployees = employees
    ? employees?.map((emp) => ({
        id: emp.id,
        name: emp.name,
      }))
    : [];

  const handleEditClick = () => {
    if (selectedRowIds !== null) {
      navigate(`/dashboard/categories/${selectedRowIds[0]}`);
    }
  };

  return (
    <div>
      <div className="flex flex-row justify-between mb-4">
        <h2 className="text-4xl font-bold">Empleados</h2>

        <div className="flex gap-4">
          <Button color="info" variant="contained">
            Nuevo
          </Button>
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
