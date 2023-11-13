import { FormSchemaDelivery, formDeliverySchema } from "@/types";
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
import { DatePicker } from "@mui/x-date-pickers";
import { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  RiBox2Line,
  RiMessage2Line,
  RiScales3Line,
  RiSortDesc,
  RiUser2Line,
} from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";

const DeliveryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormSchemaDelivery>({
    resolver: zodResolver(formDeliverySchema),
    mode: "onChange",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {}, [id]);

  const onSubmit: SubmitHandler<FormSchemaDelivery> = async (data) => {
    console.log(data);
  };

  return (
    <div>
      <form
        className="bg-gray-100 p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-4xl font-bold tracking-widest mb-4">Datos</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <FormControl variant="filled">
              <InputLabel error={errors.user ? true : false}>
                Nombres
              </InputLabel>
              <FilledInput
                startAdornment={
                  <InputAdornment position="start">
                    <RiUser2Line />
                  </InputAdornment>
                }
                {...register("user")}
                error={errors.user ? true : false}
              />
            </FormControl>
            <FormHelperText error={errors.user ? true : false}>
              {errors.user && (
                <span className="text-red-500">⚠ {errors.user.message}</span>
              )}
            </FormHelperText>
          </div>
          <FormControl variant="filled">
            <InputLabel>ID Pedido</InputLabel>
            <FilledInput
              startAdornment={
                <InputAdornment position="start">
                  <RiBox2Line />
                </InputAdornment>
              }
              {...register("idPedido", { valueAsNumber: true })}
            />
          </FormControl>
          <div className="flex gap-4">
            <span className="flex items-center justify-center">
              <RiScales3Line className="text-xl" />
            </span>
            <FormControl
              variant="filled"
              fullWidth
            >
              <InputLabel id="state-label">Estado...</InputLabel>
              <Select
                labelId="state-label"
                defaultValue={""}
                variant="filled"
                {...register("state")}
              >
                <MenuItem value="">
                  <em>Ninguno</em>
                </MenuItem>
                <MenuItem value={"true"}>Activado</MenuItem>
                <MenuItem value={"false"}>Desactivado</MenuItem>
              </Select>
            </FormControl>
          </div>
          <FormControl variant="filled">
            <InputLabel>Ubicacion</InputLabel>
            <FilledInput
              startAdornment={
                <InputAdornment position="start">
                  <RiMessage2Line />
                </InputAdornment>
              }
              {...register("ubication")}
            />
          </FormControl>
          <FormControl variant="filled">
            <InputLabel>Descripción</InputLabel>
            <FilledInput
              startAdornment={
                <InputAdornment position="start">
                  <RiSortDesc />
                </InputAdornment>
              }
              {...register("description")}
              multiline
              rows={5}
            />
          </FormControl>
          <Controller
            control={control}
            name="date"
            rules={{ required: true }}
            render={({ field: { value, ref, onChange } }) => {
              return (
                <DatePicker
                  label="Fecha Estimada"
                  value={value}
                  inputRef={ref}
                  onChange={(date: Date | string | number | null) => {
                    if (date !== null) {
                      const dateObject =
                        date instanceof Date ? date : new Date(date);
                      onChange(dateObject);
                    } else {
                      onChange(null);
                    }
                  }}
                />
              );
            }}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Button
            variant="outlined"
            color="error"
            className="w-full"
            type="button"
            onClick={() => navigate("/dashboard/delivery")}
          >
            Cancelar
          </Button>
          <Button
            variant="outlined"
            color="success"
            type="submit"
          >
            Guardar
          </Button>
        </div>
      </form>

      <DevTool control={control} />
    </div>
  );
};

export default DeliveryForm;
