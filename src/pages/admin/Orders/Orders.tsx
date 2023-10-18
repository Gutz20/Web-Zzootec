import {
  Button,
  Divider,
  FilledInput,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import {
  RiDeleteBin6Line,
  RiDingdingLine,
  RiDirectionLine,
  RiEdit2Line,
  RiGift2Line,
  RiHome2Line,
  RiInfinityLine,
  RiListOrdered,
  RiMailLine,
  RiMoneyDollarCircleLine,
  RiPhoneLine,
  RiRainbowLine,
  RiSave2Line,
  RiScales3Line,
  RiShoppingBag2Line,
  RiSortDesc,
  RiStockLine,
  RiTruckLine,
  RiUser2Line,
} from "react-icons/ri";

const Orders = () => {
  return (
    <div>
      <div>
        <h2 className="text-4xl font-bold">Pedidos</h2>
      </div>
      <Divider />
      <div className="p-4">
        <h3 className="text-xl font-semibold">Datos Generales</h3>
        <form>
          <div className="mb-4 bg-gray-100 p-4">
            <span className="text-lg font-semibold">Información</span>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <FormControl variant="filled">
                  <InputLabel>Nombres</InputLabel>
                  <FilledInput
                    id="names"
                    startAdornment={
                      <InputAdornment position="start">
                        <RiUser2Line />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl variant="filled">
                  <InputLabel>Apellidos</InputLabel>
                  <FilledInput
                    id="lastName"
                    startAdornment={
                      <InputAdornment position="start">
                        <RiInfinityLine />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl variant="filled">
                  <InputLabel>Direccion</InputLabel>
                  <FilledInput
                    id="address"
                    startAdornment={
                      <InputAdornment position="start">
                        <RiDirectionLine />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
              <div className="flex flex-col gap-4">
                <FormControl variant="filled">
                  <InputLabel>Email</InputLabel>
                  <FilledInput
                    id="email"
                    startAdornment={
                      <InputAdornment position="start">
                        <RiMailLine />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl variant="filled">
                  <InputLabel>Teléfono</InputLabel>
                  <FilledInput
                    id="lastName"
                    startAdornment={
                      <InputAdornment position="start">
                        <RiPhoneLine />
                      </InputAdornment>
                    }
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
                    <InputLabel id="state-label">Seleccionar...</InputLabel>
                    <Select
                      id="state"
                      labelId="state-label"
                      defaultValue={""}
                      variant="filled"
                      // renderValue={(value) => {
                      //   return (
                      //     <Box sx={{ display: "flex", gap: 1 }}>
                      //       <RiFocusLine />
                      //       {value === "true" ? "Activado" : "Desactivado"}
                      //     </Box>
                      //   );
                      // }}
                    >
                      <MenuItem value="">
                        <em>Ninguno</em>
                      </MenuItem>
                      <MenuItem value={"true"}>Activado</MenuItem>
                      <MenuItem value={"false"}>Desactivado</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
          <Divider />
          <div className="grid grid-cols-2 gap-4 my-4 bg-gray-100 p-4">
            <div>
              <span className="text-lg font-semibold">Pedido</span>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  <FormControl variant="filled">
                    <InputLabel>Stock</InputLabel>
                    <FilledInput
                      id="stock"
                      startAdornment={
                        <InputAdornment position="start">
                          <RiStockLine />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl variant="filled">
                    <InputLabel>Precio</InputLabel>
                    <FilledInput
                      id="price"
                      startAdornment={
                        <InputAdornment position="start">
                          <RiMoneyDollarCircleLine />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <DatePicker label="Fecha Estimada" />
                </div>
                <div className="flex flex-col gap-4 justify-between">
                  <Button
                    variant="outlined"
                    size="medium"
                    color="success"
                    startIcon={<RiSave2Line />}
                  >
                    Guardar
                  </Button>
                  <Button
                    variant="outlined"
                    size="medium"
                    color="info"
                    startIcon={<RiEdit2Line />}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="outlined"
                    size="medium"
                    color="error"
                    startIcon={<RiDeleteBin6Line />}
                  >
                    Eliminar
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-lg font-semibold">Detalle del pedido</span>
              <FormControl variant="filled">
                <InputLabel>Id Pedido</InputLabel>
                <FilledInput
                  id="idPedido"
                  startAdornment={
                    <InputAdornment position="start">
                      <RiListOrdered />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <div className="flex gap-4">
                <span className="flex items-center justify-center">
                  <RiTruckLine className="text-xl" />
                </span>
                <FormControl
                  variant="filled"
                  fullWidth
                >
                  <InputLabel>Destino</InputLabel>
                  <Select
                    label="Destino"
                    defaultValue={""}
                    variant="filled"
                  >
                    <MenuItem value="">
                      <em>Ninguno</em>
                    </MenuItem>
                    <MenuItem value={"Ica"}>Ica</MenuItem>
                    <MenuItem value={"Arequipa"}>Arequipa</MenuItem>
                    <MenuItem value={"Trujillo"}>Trujillo</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <Divider />
          <div className="mb-4 bg-gray-100 p-4 mt-4">
            <span className="text-lg font-semibold">Detalle del pedido</span>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <FormControl variant="filled">
                  <InputLabel>Descripción</InputLabel>
                  <FilledInput
                    id="description"
                    startAdornment={
                      <InputAdornment position="start">
                        <RiSortDesc />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl variant="filled">
                  <InputLabel>DNI de la compra</InputLabel>
                  <FilledInput
                    id="dniShop"
                    startAdornment={
                      <InputAdornment position="start">
                        <RiShoppingBag2Line />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl variant="filled">
                  <InputLabel>DNI Otro</InputLabel>
                  <FilledInput
                    id="dniShop"
                    startAdornment={
                      <InputAdornment position="start">
                        <RiDingdingLine />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-full">
                  <div className="flex gap-4">
                    <span className="flex items-center justify-center">
                      <RiGift2Line className="text-xl" />
                    </span>
                    <FormControl
                      variant="filled"
                      fullWidth
                    >
                      <InputLabel>Tipo Recogo</InputLabel>
                      <Select
                        variant="filled"
                        label="Tipo Recogo"
                        defaultValue={""}
                      >
                        <MenuItem value="">
                          <em>Ninguno</em>
                        </MenuItem>
                        <MenuItem value={"Ica"}>Ica</MenuItem>
                        <MenuItem value={"Arequipa"}>Arequipa</MenuItem>
                        <MenuItem value={"Trujillo"}>Trujillo</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex items-center justify-center">
                    <RiHome2Line className="text-xl" />
                  </span>
                  <FormControl
                    variant="filled"
                    fullWidth
                  >
                    <InputLabel>Sucursal</InputLabel>
                    <Select
                      label="Sucursal"
                      defaultValue={""}
                      variant="filled"
                    >
                      <MenuItem value="">
                        <em>Ninguno</em>
                      </MenuItem>
                      <MenuItem value={"Ica"}>Ica</MenuItem>
                      <MenuItem value={"Arequipa"}>Arequipa</MenuItem>
                      <MenuItem value={"Trujillo"}>Trujillo</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <FormControl variant="filled">
                  <InputLabel>Referencia</InputLabel>
                  <FilledInput
                    id="reference"
                    startAdornment={
                      <InputAdornment position="start">
                        <RiRainbowLine />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Orders;
