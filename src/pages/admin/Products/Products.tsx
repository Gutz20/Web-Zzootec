import {
  deleteMultipleProductRequest,
  deleteProductRequest,
  getProductsRequest,
} from "@/api/products";
import { columnsProducts } from "@/helpers/data";
import { Button } from "@mui/material";
import { DataGrid, GridRowId, GridToolbar } from "@mui/x-data-grid";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
        provider: product.supplier.contact, // TODO ARREGLAR ESTO >:v
      }))
    : [];

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex flex-row justify-between mb-4">
        <h2 className="text-4xl font-bold">Productos</h2>

        <div className="flex gap-4">
          <Link to="/dashboard/products/new">
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

export default Products;
