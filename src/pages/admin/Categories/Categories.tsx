import {
  deleteCategoryRequest,
  deleteMultipleCategoryRequest,
  getCategoriesRequest,
} from "@/api/categories";
import { columnsCategories } from "@/helpers/data";
import { Button } from "@mui/material";
import { DataGrid, GridRowId, GridToolbar } from "@mui/x-data-grid";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { format } from "date-fns";

const Categories = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [selectedRowIds, setSelectedRowIds] = useState<GridRowId[]>([]);
  const { data: categories, isLoading } = useQuery({
    queryFn: async () => await getCategoriesRequest(),
    queryKey: ["categories"],
  });

  const { mutateAsync: deleteCatMutation } = useMutation({
    mutationFn: deleteCategoryRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });

  const { mutateAsync: deleteMultCatMutation } = useMutation({
    mutationFn: deleteMultipleCategoryRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });

  const rowsCategories = categories
    ? categories?.map((cat) => ({
        id: cat.id,
        name: cat.name,
        creationDate: cat.creationDate
          ? format(new Date(cat.creationDate), "dd/MM/yyyy HH:mm:ss")
          : "",
      }))
    : [];

  const handleEditClick = () => {
    if (selectedRowIds !== null) {
      navigate(`/dashboard/categories/${selectedRowIds[0]}`);
    }
  };

  const handleDeleteClick = () => {
    if (selectedRowIds !== null) {
      if (selectedRowIds.length === 1) {
        deleteCatMutation(selectedRowIds[0] as number);
        toast("Fila eliminada", {
          position: "bottom-right",
          type: "success",
        });
      } else {
        deleteMultCatMutation(selectedRowIds as number[]);
        toast("Se eliminaron las filas seleccionadas", {
          position: "bottom-right",
          type: "success",
        });
      }
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex flex-row justify-between mb-4">
        <h2 className="text-4xl font-bold">Categorias</h2>

        <div className="flex gap-4">
          <Link to="/dashboard/categories/new">
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
          rows={rowsCategories}
          columns={columnsCategories}
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

export default Categories;
