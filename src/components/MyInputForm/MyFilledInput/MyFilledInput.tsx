import { MyInputProps } from "@/schemas/UiSchemas";
import {
  FilledInput,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import { RiUser2Line } from "react-icons/ri";

function MyFilledInput<T>({
  fieldName,
  label,
  valueAsNumber,
  valueAsDate,
}: MyInputProps<T>) {
  const {
    getValues,
    setValue,
    formState: { errors },
    register,
    watch,
  } = useFormContext();

  const registerOptions = valueAsNumber ? { valueAsNumber } : valueAsDate;

  return (
    <>
      <FormControl variant="filled">
        <InputLabel error={errors.firstName ? true : false}>{label}</InputLabel>
        <FilledInput
          startAdornment={
            <InputAdornment position="start">
              <RiUser2Line />
            </InputAdornment>
          }
          {...register(fieldName as string)}
          error={errors.firstName ? true : false}
          autoComplete="off"
          autoFocus
        />
      </FormControl>
      <FormHelperText error={errors.firstName ? true : false}>
        {errors.firstName && (
          <span className="text-red-500">
            ⚠ {errors[fieldName]?.message as ReactNode}
          </span>
        )}
      </FormHelperText>
    </>
  );
}

export default MyFilledInput;
