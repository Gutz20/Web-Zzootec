import {
  createCategoryRequest,
  getCategoryRequest,
  updateCategoryRequest,
} from "@/api/categories";
import { FormSchemaCategory, formCategorySchema } from "@/types";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  FilledInput,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { RiUser2Line } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";

const CategoryForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm<FormSchemaCategory>({
    resolver: zodResolver(formCategorySchema),
    mode: "onChange",
  });

  useEffect(() => {
    const loadCategory = async () => {
      if (params.id) {
        const category = await getCategoryRequest(Number(params.id));
        setValue("name", category.name);
      }
    };
    loadCategory();
  }, [params.id]);

  const onSubmit: SubmitHandler<FormSchemaCategory> = async (data) => {
    try {
      if (params.id) {
        updateCategoryRequest(Number(params.id), {
          name: data.name,
          id: Number(params.id),
          creation_date: null,
        });
      } else {
        createCategoryRequest({
          name: data.name,
          id: null,
          creation_date: null,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="bg-gray-100 p-4" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-4xl font-bold tracking-widest mb-4">Datos</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <FormControl variant="filled">
              <InputLabel error={errors.name ? true : false}>
                Nombres
              </InputLabel>
              <FilledInput
                startAdornment={
                  <InputAdornment position="start">
                    <RiUser2Line />
                  </InputAdornment>
                }
                {...register("name")}
                error={errors.name ? true : false}
              />
            </FormControl>
            <FormHelperText error={errors.name ? true : false}>
              {errors.name && (
                <span className="text-red-500">⚠ {errors.name.message}</span>
              )}
            </FormHelperText>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Button
            variant="outlined"
            color="error"
            className="w-full"
            type="button"
            onClick={() => navigate("/dashboard/categories")}
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

export default CategoryForm;
