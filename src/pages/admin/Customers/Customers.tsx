import {
  deleteClientRequest,
  deleteMultipleClientRequest,
  getClientsRequest,
} from "@/api/clients";
import { getUsersRequest } from "@/api/users";
import { columnsCustomers, rowsCustomers } from "@/helpers/data";
import { Button } from "@mui/material";
import { DataGrid, GridRowId, GridToolbar } from "@mui/x-data-grid";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Customers = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [selectedRowIds, setSelectedRowIds] = useState<GridRowId[]>([]);
  const { data: clients, isLoading } = useQuery({
    queryFn: async () => await getUsersRequest(),
    queryKey: ["clients"],
  });

  const { mutateAsync: deleteClientMutation } = useMutation({
    mutationFn: deleteClientRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clients"] });
    },
  });

  const { mutateAsync: deleteMultClientMutation } = useMutation({
    mutationFn: deleteMultipleClientRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clients"] });
    },
  });

  console.log(clients);

  const handleEditClick = () => {
    if (selectedRowIds !== null) {
      navigate(`/dashboard/customers/${selectedRowIds[0]}`);
    }
  };

  const handleDeleteClick = () => {
    if (selectedRowIds !== null) {
      if (selectedRowIds.length === 1) {
        deleteClientMutation(selectedRowIds[0] as number);
        toast("Cliente eliminado", {
          position: "bottom-right",
          type: "success",
        });
      } else {
        deleteMultClientMutation(selectedRowIds as number[]);
        toast(`Se eliminaron los clientes`, {
          position: "bottom-right",
          type: "success",
        });
      }
    }
  };

  console.log(clients);
  const rowsCustomers = clients
    ? clients
        .filter((cli) => cli.roles.length === 1 && cli.roles[0].name === "USER")
        .map((cli) => ({
          id: cli.id,
          firstName: cli.firstName,
          lastName: cli.lastName,
          phoneNumber: cli.phone,
          address: cli.address,
        }))
    : [];

  return (
    <div>
      <div className="flex flex-row justify-between mb-4">
        <h2 className="text-4xl font-bold">Clientes</h2>

        <div className="flex gap-4">
          <Link to="/dashboard/customers/new">
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
          rows={rowsCustomers}
          columns={columnsCustomers}
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

export default Customers;
