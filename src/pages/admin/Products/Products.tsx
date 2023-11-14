import { deleteMultipleProductRequest, deleteProductRequest, getProductsRequest } from "@/api/products";
import { getUsersRequest, deleteUserRequest, deleteMultipleUserRequest } from "@/api/users";
import { columnsProducts, rowsProducts } from "@/helpers/data";
import { Button } from "@mui/material";
import { DataGrid, GridRowId, GridToolbar } from "@mui/x-data-grid";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Products = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [selectedRowIds, setSelectedRowIds] = useState<GridRowId[]>([]);

  const { data: products, isLoading } = useQuery({
    queryFn: async () => await getProductsRequest(),
    queryKey: ["products"],
  });

  const { mutateAsync: deleteProductMutation } = useMutation({
    mutationFn: deleteProductRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const { mutateAsync: deleteMultProductMutation } = useMutation({
    mutationFn: deleteMultipleProductRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const handleEditClick = () => {
    if (selectedRowIds !== null) {
      navigate(`/dashboard/products/${selectedRowIds[0]}`);
    }
  };

  const handleDeleteClick = () => {
    if (selectedRowIds !== null) {
      if (selectedRowIds.length === 1) {
        deleteProductMutation(selectedRowIds[0] as number);
        toast("Fila eliminada", {
          position: "bottom-right",
          type: "success",
        });
      } else {
        deleteMultProductMutation(selectedRowIds as number[]);
        toast("Se eliminaron las filas seleccionadas", {
          position: "bottom-right",
          type: "success",
        });
      }
    }
  };

  const rowsProducts = products
    ? products?.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      stock: product.stock,
      type: product.category.name,
      provider: product.provider // TODO ARREGLAR ESTO >:v
    }))
    : [];

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex flex-row justify-between mb-4">
        <h2 className="text-4xl font-bold">Productos</h2>

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
          rows={rowsProducts}
          columns={columnsProducts}
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

export default Products;
