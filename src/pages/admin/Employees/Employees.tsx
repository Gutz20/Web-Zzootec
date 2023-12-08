import {
  deleteMultipleUserRequest,
  deleteUserRequest,
  getUsersRequest,
} from "@/api/users";
import { columnsEmployees } from "@/helpers/data";
import { Button } from "@mui/material";
import { DataGrid, GridRowId, GridToolbar } from "@mui/x-data-grid";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Employees = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [selectedRowIds, setSelectedRowIds] = useState<GridRowId[]>([]);
  const { data: employees, isLoading } = useQuery({
    queryFn: async () => await getUsersRequest(),
    queryKey: ["employees"],
  });

  const { mutateAsync: deleteEmployeMutation } = useMutation({
    mutationFn: deleteUserRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });

  const { mutateAsync: deleteMultEmployeMutation } = useMutation({
    mutationFn: deleteMultipleUserRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });

  const handleEditClick = () => {
    if (selectedRowIds !== null) {
      navigate(`/dashboard/employees/${selectedRowIds[0]}`);
    }
  };

  const handleDeleteClick = () => {
    if (selectedRowIds !== null) {
      if (selectedRowIds.length === 1) {
        deleteEmployeMutation(selectedRowIds[0] as number);
        toast("Fila eliminada", {
          position: "bottom-right",
          type: "success",
        });
      } else {
        deleteMultEmployeMutation(selectedRowIds as number[]);
        toast("Se eliminaron las filas seleccionadas", {
          position: "bottom-right",
          type: "success",
        });
      }
    }
  };

  const rowsEmployees = employees
    ? employees
        .filter((emp) => emp.roles.some((rol) => rol.name === "ADMIN"))
        .map((emp) => ({
          id: emp.id,
          fullName: emp.firstName + " " + emp.lastName,
          genre: emp.genre,
          contract: emp.contract,
          creationDate: emp.creationDate
            ? format(new Date(emp.creationDate), "dd/MM/yyyy HH:mm:ss")
            : "",
          departureDate: emp.departureDate
            ? format(new Date(emp.departureDate), "dd/MM/yyyy HH:mm:ss")
            : "Ninguno",
        }))
    : [];

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex flex-row justify-between mb-4">
        <h2 className="text-4xl font-bold">Empleados</h2>

        <div className="flex gap-4">
          <Link to="/dashboard/employees/new">
            <Button color="info" variant="contained">
              Nuevo
            </Button>
          </Link>
          <Button color="success" variant="contained">
            Guardar
          </Button>
          <Button onClick={handleEditClick} color="inherit" variant="contained">
            Editar
          </Button>
          <Button onClick={handleDeleteClick} color="error" variant="contained">
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
          onRowSelectionModelChange={(newSelection) => {
            setSelectedRowIds(newSelection);
          }}
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
