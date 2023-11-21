import { updateCategoryRequest } from "@/api/categories";
import { createUserRequest, getUserRequest } from "@/api/users";
import { FormSchemaUser, formUserSchema } from "@/types";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Checkbox,
  FilledInput,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import {
  RiEyeLine,
  RiEyeOffLine,
  RiLock2Line,
  RiMailLine,
  RiUser2Line,
  RiUserLine,
} from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import z from "zod";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const roles = z.array(
  z.object({
    name: z.enum(["ADMIN", "USER", "INVITED"]),
  })
);

const contracts = ["FULLTIME", "PARTTIME", "TEMPORARY"];

const genres = ["HOMBRE", "MUJER"];

export type rolesType = z.infer<typeof roles>;

const EmployeeForm = () => {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    reset,
    watch,
  } = useForm<FormSchemaUser>({
    resolver: zodResolver(formUserSchema),
    mode: "onChange",
  });

  useEffect(() => {
    const loadUser = async () => {
      if (params.id) {
        const user = await getUserRequest(Number(params.id));
        setValue("firstName", user.firstName);
        setValue("lastName", user.lastName);
        setValue("email", user.email);
        setValue("username", user.username);
        setValue("password", user.password);

        const roleNames = user.roles.map((role) => role.name);
        setSelectedRoles(roleNames);
        setValue("roles", roleNames);

        setValue("contract", user.contract);
        setValue("genre", user.genre);
      }
    };
    loadUser();
  }, [params.id]);

  const onSubmit: SubmitHandler<FormSchemaUser> = async (data) => {
    console.log(data);
    try {
      if (params.id) {
        updateCategoryRequest(Number(params.id), {
          id: Number(params.id),
          name: data.firstName,
          creationDate: null,
        });
      } else {
        createUserRequest({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          username: data.username,
          password: data.password,
          roles: data.roles,
          contract: data.contract,
          genre: data.genre,
        });
        setSelectedRoles([]);
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onError: SubmitErrorHandler<FormSchemaUser> = async (data) => {
    console.log(data);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
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
              <InputLabel error={errors.firstName ? true : false}>
                Nombres
              </InputLabel>
              <FilledInput
                startAdornment={
                  <InputAdornment position="start">
                    <RiUser2Line />
                  </InputAdornment>
                }
                {...register("firstName")}
                error={errors.firstName ? true : false}
                autoComplete="off"
                autoFocus
              />
            </FormControl>
            <FormHelperText error={errors.firstName ? true : false}>
              {errors.firstName && (
                <span className="text-red-500">
                  ⚠ {errors.firstName.message}
                </span>
              )}
            </FormHelperText>
          </div>
          <div className="flex flex-col">
            <FormControl variant="filled">
              <InputLabel error={errors.lastName ? true : false}>
                Apellidos
              </InputLabel>
              <FilledInput
                startAdornment={
                  <InputAdornment position="start">
                    <RiUser2Line />
                  </InputAdornment>
                }
                {...register("lastName")}
                error={errors.lastName ? true : false}
                autoComplete="off"
                autoFocus
              />
            </FormControl>
            <FormHelperText error={errors.lastName ? true : false}>
              {errors.lastName && (
                <span className="text-red-500">
                  ⚠ {errors.lastName.message}
                </span>
              )}
            </FormHelperText>
          </div>
          <div className="flex flex-col">
            <FormControl variant="filled">
              <InputLabel error={errors.email ? true : false}>Email</InputLabel>
              <FilledInput
                startAdornment={
                  <InputAdornment position="start">
                    <RiMailLine />
                  </InputAdornment>
                }
                {...register("email")}
                error={errors.email ? true : false}
                autoComplete="off"
                autoFocus
              />
            </FormControl>
            <FormHelperText error={errors.email ? true : false}>
              {errors.email && (
                <span className="text-red-500">⚠ {errors.email.message}</span>
              )}
            </FormHelperText>
          </div>
          <div className="flex flex-col">
            <FormControl variant="filled">
              <InputLabel error={errors.username ? true : false}>
                Username
              </InputLabel>
              <FilledInput
                startAdornment={
                  <InputAdornment position="start">
                    <RiUserLine />
                  </InputAdornment>
                }
                {...register("username")}
                error={errors.username ? true : false}
                autoComplete="off"
                autoFocus
              />
            </FormControl>
            <FormHelperText error={errors.username ? true : false}>
              {errors.username && (
                <span className="text-red-500">
                  ⚠ {errors.username.message}
                </span>
              )}
            </FormHelperText>
          </div>
          <div className="flex flex-col">
            <FormControl variant="filled">
              <InputLabel
                error={errors.password ? true : false}
                htmlFor="outlined-adornment-password"
              >
                Password
              </InputLabel>
              <FilledInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                startAdornment={
                  <InputAdornment position="start">
                    <RiLock2Line />
                  </InputAdornment>
                }
                {...register("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div className="flex flex-col">
            <Controller
              control={control}
              name="roles"
              rules={{ required: true }}
              render={({ field: { ref, onChange } }) => {
                return (
                  <FormControl variant="filled">
                    <InputLabel id="roles-selected">Roles</InputLabel>
                    <Select
                      labelId="roles-selected"
                      variant="filled"
                      value={selectedRoles}
                      multiple
                      inputRef={ref}
                      input={<FilledInput />}
                      onChange={(e) => {
                        const {
                          target: { value },
                        } = e;

                        setSelectedRoles(
                          typeof value === "string" ? value.split(",") : value
                        );
                        onChange(value);
                      }}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      <MenuItem value="ADMIN">
                        <Checkbox checked={selectedRoles.includes("ADMIN")} />
                        <ListItemText primary={"Admin"} />
                      </MenuItem>
                      <MenuItem value="USER">
                        <Checkbox checked={selectedRoles.includes("USER")} />
                        <ListItemText primary={"Usuario"} />
                      </MenuItem>
                      <MenuItem value="INVITED">
                        <Checkbox checked={selectedRoles.includes("INVITED")} />
                        <ListItemText primary={"Invitado"} />
                      </MenuItem>
                    </Select>
                  </FormControl>
                );
              }}
            />
          </div>
          <div className="flex gap-4">
            <FormControl variant="filled" fullWidth>
              <InputLabel id="contract-label">Contracto</InputLabel>
              <Select
                labelId="contract-label"
                value={watch("contract") || ""}
                variant="filled"
                {...register("contract")}
              >
                <MenuItem value="">
                  <em>Ninguno</em>
                </MenuItem>
                {contracts.map((contract, i) => (
                  <MenuItem key={i} value={contract}>
                    {contract}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="flex gap-4">
            <FormControl variant="filled" fullWidth>
              <InputLabel id="genre-label">Genero</InputLabel>
              <Select
                labelId="genre-label"
                value={watch("genre") || ""}
                variant="filled"
                {...register("genre")}
              >
                <MenuItem value="">
                  <em>Ninguno</em>
                </MenuItem>
                {genres.map((genre, i) => (
                  <MenuItem key={i} value={genre}>
                    {genre}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <Button
            variant="outlined"
            color="error"
            className="w-full"
            type="button"
            onClick={() => navigate("/dashboard/employees")}
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

export default EmployeeForm;
