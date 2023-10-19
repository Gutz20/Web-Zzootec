import { columnsSubsidiaries, rowsSubsidiaries } from "@/helpers/data";
import { FormSchemaSucursal, formSucursalSchema } from "@/types";
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
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  RiAdminLine,
  RiListIndefinite,
  RiMap2Line,
  RiPhoneLine,
  RiSearch2Line,
  RiUser2Line,
  RiUserLocationLine,
} from "react-icons/ri";

const Subsidiaries = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormSchemaSucursal>({
    resolver: zodResolver(formSucursalSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormSchemaSucursal> = async (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="flex flex-row justify-between mb-4">
        <h2 className="text-4xl font-bold">Sucursales</h2>

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
        <h3>Sucursales</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-gray-100 p-4 grid grid-cols-3 gap-4">
            <div className="flex flex-col">
              <FormControl variant="filled">
                <InputLabel error={errors.idLocal ? true : false}>
                  ID Local
                </InputLabel>
                <FilledInput
                  startAdornment={
                    <InputAdornment position="start">
                      <RiListIndefinite />
                    </InputAdornment>
                  }
                  {...register("idLocal")}
                  error={errors.idLocal ? true : false}
                />
              </FormControl>
              <FormHelperText error={errors.idLocal ? true : false}>
                {errors.idLocal && (
                  <span className="text-red-500">
                    ⚠ {errors.idLocal.message}
                  </span>
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
                  {...register("idLocal")}
                  error={errors.idLocal ? true : false}
                />
              </FormControl>
              <FormHelperText error={errors.idLocal ? true : false}>
                {errors.idLocal && (
                  <span className="text-red-500">
                    ⚠ {errors.idLocal.message}
                  </span>
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
                      <RiUserLocationLine />
                    </InputAdornment>
                  }
                  {...register("idLocal")}
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
                      <RiPhoneLine />
                    </InputAdornment>
                  }
                  {...register("idLocal")}
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
                <InputLabel error={errors.zone ? true : false}>Zona</InputLabel>
                <FilledInput
                  startAdornment={
                    <InputAdornment position="start">
                      <RiMap2Line />
                    </InputAdornment>
                  }
                  {...register("idLocal")}
                  error={errors.zone ? true : false}
                />
              </FormControl>
              <FormHelperText error={errors.zone ? true : false}>
                {errors.zone && (
                  <span className="text-red-500">⚠ {errors.zone.message}</span>
                )}
              </FormHelperText>
            </div>
            <div className="flex flex-col">
              <FormControl variant="filled">
                <InputLabel error={errors.admin ? true : false}>
                  Admin
                </InputLabel>
                <FilledInput
                  startAdornment={
                    <InputAdornment position="start">
                      <RiAdminLine />
                    </InputAdornment>
                  }
                  {...register("idLocal")}
                  error={errors.admin ? true : false}
                />
              </FormControl>
              <FormHelperText error={errors.admin ? true : false}>
                {errors.admin && (
                  <span className="text-red-500">⚠ {errors.admin.message}</span>
                )}
              </FormHelperText>
            </div>
            <div className="flex flex-col">
              <FormControl variant="filled">
                <InputLabel error={errors.search ? true : false}>
                  Buscar
                </InputLabel>
                <FilledInput
                  startAdornment={
                    <InputAdornment position="start">
                      <RiSearch2Line />
                    </InputAdornment>
                  }
                  {...register("idLocal")}
                  error={errors.search ? true : false}
                />
              </FormControl>
              <FormHelperText error={errors.search ? true : false}>
                {errors.search && (
                  <span className="text-red-500">
                    ⚠ {errors.search.message}
                  </span>
                )}
              </FormHelperText>
            </div>
          </div>
        </form>

        <DataGrid
          rows={rowsSubsidiaries}
          columns={columnsSubsidiaries}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          autoHeight
          disableRowSelectionOnClick
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
        />
      </div>

      <DevTool control={control} />
    </div>
  );
};

export default Subsidiaries;
