import { FormSchemaProviders, formProvidersSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  FilledInput,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { useForm } from "react-hook-form";
import {
  RiBook2Line,
  RiCloseCircleLine,
  RiDownload2Line,
  RiImage2Line,
  RiRepeatOneLine,
  RiSave2Line,
  RiSave3Line,
  RiUser2Line,
} from "react-icons/ri";

const Suppliers = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormSchemaProviders>({
    resolver: zodResolver(formProvidersSchema),
    mode: "onChange",
  });

  return (
    <div className="grid grid-cols-3 gap-4 h-full">
      <div className="col-span-1 border-2 p-4 border-gray-500">
        <div className="flex flex-col items-center justify-center">
          <img
            src="/supplier_profile.png"
            alt="Supplier"
            className="w-36 h-24"
          />
          <span className="text-xl font-bold flex items-center justify-center">
            <RiImage2Line /> Perfil
          </span>
        </div>
        <div className="flex items-end justify-center gap-4 h-[550px]">
          <Button
            variant="outlined"
            color="success"
            className="h-fit"
          >
            <RiSave2Line className="mr-2" /> Guardar
          </Button>
          <Button
            variant="outlined"
            color="error"
            className="h-fit"
          >
            <RiCloseCircleLine className="mr-2" /> Salir
          </Button>
        </div>
      </div>
      <div className="col-span-2 border-2 p-4 border-gray-500">
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-4 flex flex-col bg-gray-100 p-4 gap-4 ">
            <div className="flex flex-col">
              <FormControl variant="filled">
                <InputLabel error={errors.id ? true : false}>
                  Cod Proveedor
                </InputLabel>
                <FilledInput
                  startAdornment={
                    <InputAdornment position="start">
                      <RiUser2Line />
                    </InputAdornment>
                  }
                  {...register("id")}
                  error={errors.id ? true : false}
                />
              </FormControl>
              <FormHelperText error={errors.id ? true : false}>
                {errors.id && (
                  <span className="text-red-500">⚠ {errors.id.message}</span>
                )}
              </FormHelperText>
            </div>
            <div className="flex flex-col">
              <FormControl variant="filled">
                <InputLabel error={errors.names ? true : false}>
                  Nombres
                </InputLabel>
                <FilledInput
                  startAdornment={
                    <InputAdornment position="start">
                      <RiUser2Line />
                    </InputAdornment>
                  }
                  {...register("names")}
                  error={errors.names ? true : false}
                />
              </FormControl>
              <FormHelperText error={errors.names ? true : false}>
                {errors.names && (
                  <span className="text-red-500">⚠ {errors.names.message}</span>
                )}
              </FormHelperText>
            </div>
            <div className="flex flex-col">
              <FormControl variant="filled">
                <InputLabel error={errors.address ? true : false}>
                  Dirección
                </InputLabel>
                <FilledInput
                  startAdornment={
                    <InputAdornment position="start">
                      <RiUser2Line />
                    </InputAdornment>
                  }
                  {...register("address")}
                  error={errors.address ? true : false}
                />
              </FormControl>
              <FormHelperText error={errors.address ? true : false}>
                {errors.address && (
                  <span className="text-red-500">
                    ⚠ {errors.address.message}
                  </span>
                )}
              </FormHelperText>
            </div>
            <div className="flex flex-col">
              <FormControl variant="filled">
                <InputLabel error={errors.phone ? true : false}>
                  Telefono
                </InputLabel>
                <FilledInput
                  startAdornment={
                    <InputAdornment position="start">
                      <RiUser2Line />
                    </InputAdornment>
                  }
                  {...register("phone")}
                  error={errors.phone ? true : false}
                />
              </FormControl>
              <FormHelperText error={errors.phone ? true : false}>
                {errors.phone && (
                  <span className="text-red-500">⚠ {errors.phone.message}</span>
                )}
              </FormHelperText>
            </div>
            <div className="flex flex-col">
              <FormControl variant="filled">
                <InputLabel error={errors.rubro ? true : false}>
                  Giro/Rubro
                </InputLabel>
                <FilledInput
                  startAdornment={
                    <InputAdornment position="start">
                      <RiUser2Line />
                    </InputAdornment>
                  }
                  {...register("rubro")}
                  error={errors.rubro ? true : false}
                />
              </FormControl>
              <FormHelperText error={errors.rubro ? true : false}>
                {errors.rubro && (
                  <span className="text-red-500">⚠ {errors.rubro.message}</span>
                )}
              </FormHelperText>
            </div>
            <div className="flex flex-col">
              <FormControl variant="filled">
                <InputLabel error={errors.responsable ? true : false}>
                  Responsable
                </InputLabel>
                <FilledInput
                  startAdornment={
                    <InputAdornment position="start">
                      <RiUser2Line />
                    </InputAdornment>
                  }
                  {...register("responsable")}
                  error={errors.responsable ? true : false}
                />
              </FormControl>
              <FormHelperText error={errors.responsable ? true : false}>
                {errors.responsable && (
                  <span className="text-red-500">
                    ⚠ {errors.responsable.message}
                  </span>
                )}
              </FormHelperText>
            </div>
            <div className="flex flex-col">
              <FormControl variant="filled">
                <InputLabel error={errors.product ? true : false}>
                  Producto/Servicio
                </InputLabel>
                <FilledInput
                  startAdornment={
                    <InputAdornment position="start">
                      <RiUser2Line />
                    </InputAdornment>
                  }
                  {...register("product")}
                  error={errors.product ? true : false}
                />
              </FormControl>
              <FormHelperText error={errors.product ? true : false}>
                {errors.product && (
                  <span className="text-red-500">
                    ⚠ {errors.product.message}
                  </span>
                )}
              </FormHelperText>
            </div>
          </div>
          <div className="col-span-2 flex flex-col items-center">
            <img
              src="/public/zzootiBOT.jpeg"
              alt="Bot"
              className="w-36 h-36 mb-4"
            />
            <Button
              variant="text"
              color="inherit"
            >
              <RiRepeatOneLine /> Actualizar
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-around mt-4 gap-4">
          <Button
            color="warning"
            variant="outlined"
          >
            <RiBook2Line /> Ver Proveedores
          </Button>
          <Button
            color="secondary"
            variant="outlined"
          >
            <RiDownload2Line /> Descargar Excel
          </Button>
          <Button
            color="inherit"
            variant="outlined"
          >
            <RiSave3Line /> Nuevo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Suppliers;
