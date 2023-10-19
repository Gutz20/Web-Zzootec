import {
  Button,
  FilledInput,
  FormControl,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useEffect, useState } from "react";
import { RiChat2Line, RiDirectionLine } from "react-icons/ri";

const CLOCK_OPTIONS = {
  baseOptions: {
    baseColor: "#aaaaaa",
    labelColor: "#d97a90",
    showNumbers: false,
    size: 400,
  },
  handColors: {
    second: "#d81c7a",
    minute: "#459cff",
    hour: "#446aaa",
  },
};

const Assistance = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div className="">
        <h2 className="text-4xl font-bold">Asistencia</h2>

        <div className="bg-gray-100 p-4 grid grid-cols-2 gap-4 my-4">
          <FormControl variant="filled">
            <InputLabel>DNI</InputLabel>
            <FilledInput
              id="address"
              startAdornment={
                <InputAdornment position="start">
                  <RiDirectionLine />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="filled">
            <InputLabel>Rol</InputLabel>
            <FilledInput
              id="address"
              startAdornment={
                <InputAdornment position="start">
                  <RiDirectionLine />
                </InputAdornment>
              }
            />
          </FormControl>
          <DatePicker label="Seleccione una Fecha" />
          <FormControl variant="filled">
            <InputLabel>Name</InputLabel>
            <FilledInput
              id="address"
              startAdornment={
                <InputAdornment position="start">
                  <RiDirectionLine />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="filled">
            <InputLabel>Cargo</InputLabel>
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

        <div className="bg-gray-100 p-4 grid grid-cols-2">
          {/* <span className="flex items-center justify-center text-4xl font-bold">
            Hora: {time.toLocaleTimeString()}
          </span>
          <TimeClock views={["hours"]} /> */}
          <div className="flex flex-col items-center justify-center gap-4">
            <Button
              color="success"
              variant="outlined"
              className="w-36"
            >
              Guardar
            </Button>
            <Button
              color="info"
              variant="outlined"
              className="w-36"
            >
              Actualizar
            </Button>
            <Button
              color="error"
              variant="outlined"
              className="w-36"
            >
              Salir
            </Button>
            <Button
              color="warning"
              variant="outlined"
              className="w-36"
            >
              <RiChat2Line className="mr-2" /> <span>Asistencia</span>
            </Button>
            T
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assistance;
