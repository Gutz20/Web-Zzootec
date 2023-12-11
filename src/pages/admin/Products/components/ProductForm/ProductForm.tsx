import { getCategoriesRequest } from "@/api/categories";
import {
  createProductRequest,
  getProductRequest,
  updateProductRequest,
} from "@/api/products";
import { getSuppliersRequest } from "@/api/providers";
import { FormSchemaProduct, formProductSchema } from "@/types";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  FilledInput,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import {
  RiBox2Line,
  RiImage2Line,
  RiPriceTag3Line,
  RiStockLine,
  RiUser2Line
} from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";

const ProductForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    watch,
  } = useForm<FormSchemaProduct>({
    resolver: zodResolver(formProductSchema),
    mode: "onChange",
  });

  const { data: categories } = useQuery({
    queryFn: async () => await getCategoriesRequest(),
    queryKey: ["categories"],
  });

  const { data: suppliers } = useQuery({
    queryFn: async () => await getSuppliersRequest(),
    queryKey: ["suppliers"],
  });

  useEffect(() => {
    const loadProduct = async () => {
      if (params.id) {
        const product = await getProductRequest(Number(params.id));
        setValue("name", product.name);
      }
    };
    loadProduct();
  }, [params.id]);

  const onSubmit: SubmitHandler<FormSchemaProduct> = async (data) => {
    try {
      if (params.id) {
        updateProductRequest(Number(params.id), {
          id: Number(params.id),
          name: data.name,
          image: data.image,
          price: data.price,
          stock: data.stock,
          category: data.category,
          supplier: data.supplier,
        });
      } else {
        createProductRequest({
          id: null,
          name: data.name,
          image: data.image,
          price: data.price,
          stock: data.stock,
          category: data.category,
          supplier: data.supplier,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onError: SubmitErrorHandler<FormSchemaProduct> = async (data) => {
    console.log(data);
  };

  return (
    <div>
      <form
        className="bg-gray-100 p-4"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <h2 className="text-4xl font-bold tracking-widest mb-4">Datos</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <FormControl variant="filled">
              <InputLabel error={errors.name ? true : false}>Nombre</InputLabel>
              <FilledInput
                startAdornment={
                  <InputAdornment position="start">
                    <RiUser2Line />
                  </InputAdornment>
                }
                {...register("name")}
                error={errors.name ? true : false}
                autoComplete="off"
                autoFocus
              />
            </FormControl>
            <FormHelperText error={errors.name ? true : false}>
              {errors.name && (
                <span className="text-red-500">⚠ {errors.name.message}</span>
              )}
            </FormHelperText>
          </div>
          <div className="flex flex-col">
            <FormControl variant="filled">
              <InputLabel error={errors.image ? true : false}>
                Imagen
              </InputLabel>
              <FilledInput
                startAdornment={
                  <InputAdornment position="start">
                    <RiImage2Line />
                  </InputAdornment>
                }
                {...register("image")}
                error={errors.image ? true : false}
                autoComplete="off"
                autoFocus
              />
            </FormControl>
            <FormHelperText error={errors.image ? true : false}>
              {errors.image && (
                <span className="text-red-500">⚠ {errors.image.message}</span>
              )}
            </FormHelperText>
          </div>
          <div className="flex flex-col">
            <FormControl variant="filled">
              <InputLabel error={errors.price ? true : false}>
                Precio
              </InputLabel>
              <FilledInput
                startAdornment={
                  <InputAdornment position="start">
                    <RiPriceTag3Line />
                  </InputAdornment>
                }
                {...register("price", { valueAsNumber: true })}
                error={errors.price ? true : false}
                autoComplete="off"
                autoFocus
              />
            </FormControl>
            <FormHelperText error={errors.price ? true : false}>
              {errors.price && (
                <span className="text-red-500">⚠ {errors.price.message}</span>
              )}
            </FormHelperText>
          </div>
          <div className="flex flex-col">
            <FormControl variant="filled">
              <InputLabel error={errors.stock ? true : false}>Stock</InputLabel>
              <FilledInput
                startAdornment={
                  <InputAdornment position="start">
                    <RiStockLine />
                  </InputAdornment>
                }
                {...register("stock", { valueAsNumber: true })}
                error={errors.stock ? true : false}
                autoComplete="off"
                autoFocus
              />
            </FormControl>
            <FormHelperText error={errors.stock ? true : false}>
              {errors.stock && (
                <span className="text-red-500">⚠ {errors.stock.message}</span>
              )}
            </FormHelperText>
          </div>
          <div className="flex gap-4">
            <FormControl variant="filled" fullWidth>
              <InputLabel id="category-label">Categoria</InputLabel>
              <Select
                labelId="category-label"
                value={watch("category") || ""}
                variant="filled"
                {...register("category")}
                startAdornment={
                  <InputAdornment position="start">
                    <RiBox2Line />
                  </InputAdornment>
                }
              >
                <MenuItem value="">
                  <em>Ninguno</em>
                </MenuItem>
                {categories?.map((cat, i) => (
                  <MenuItem key={i} value={cat.name}>
                    {cat.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          {/* <div className="flex gap-4">
            <FormControl variant="filled" fullWidth>
              <InputLabel id="suppplier-label">Proveedores</InputLabel>
              <Select
                labelId="suppplier-label"
                value={watch("supplier") || ""}
                variant="filled"
                {...register("supplier")}
                startAdornment={
                  <InputAdornment position="start">
                    <RiSkipUpLine />
                  </InputAdornment>
                }
              >
                <MenuItem value="">
                  <em>Ninguno</em>
                </MenuItem>
                {suppliers?.map((sup, i) => (
                  <MenuItem key={i} value={sup.contact}>
                    {sup.contact}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div> */}
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Button
            variant="outlined"
            color="error"
            className="w-full"
            type="button"
            onClick={() => navigate("/dashboard/products")}
          >
            Cancelar
          </Button>
          <Button variant="outlined" color="success" type="submit">
            Guardar
          </Button>
        </div>
      </form>

      <DevTool control={control} />
    </div>
  );
};

export default ProductForm;
