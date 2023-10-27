import { getCurrentUserRequest, loginRequest } from "@/api/auth";
import { useAuthStore } from "@/store";
import { FormSchemaLogin, formLoginSchema } from "@/types";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import {
  RiEyeFill,
  RiEyeOffFill,
  RiLockFill,
  RiMailFill,
} from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormSchemaLogin>({
    resolver: zodResolver(formLoginSchema),
    mode: "onChange",
  });

  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormSchemaLogin> = async (data) => {
    const resLogin = await loginRequest(data);
    setToken(resLogin.data.token);

    // const resUser = await getCurrentUserRequest();
    // setUser(resUser.data);

    navigate(`/dashboard`);
  };

  const onError: SubmitErrorHandler<FormSchemaLogin> = async (data) => {
    toast.error(`test ${data.username?.message || data.password?.message}`, {
      theme: "light",
      position: "top-center",
    });
  };

  return (
    <div
      id="particles-js"
      className="bg-loginPattern bg-fixed h-screen flex items-center justify-center bg-cover"
    >
      <div className="flex flex-col items-center justify-center gap-4 bg-primaryZzootec2 text-white w-auto lg:w-[450px] p-8 m-auto rounded-xl shadow-2xl">
        <img
          src="./logo.png"
          alt="Logo"
          className="w-40 h-40 rounded-full shadow-lg shadow-slate-700"
        />
        <h1 className="font-youngSerif text-3xl text-gray-100 tracking-[2px]">
          Bienvenido a Zzootec System
        </h1>
        <form
          className="flex flex-col gap-2 w-full"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <div className="mb-2">
            <div className="relative">
              <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2" />
              <input
                id="username"
                type="text"
                placeholder="Nombre de Usuario"
                className="py-3 pl-8 px-4 text-white bg-primaryZzootec1 outline-none rounded-lg w-full"
                {...register("username")}
                autoComplete="off"
              />
            </div>
            {errors.username && (
              <p className="text-red-500 text-xs font-semibold">
                {errors.username.message}
              </p>
            )}
          </div>
          <div className="mb-2">
            <div className="relative">
              <RiLockFill className="absolute top-1/2 -translate-y-1/2 left-2" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="py-3 px-8 text-white bg-primaryZzootec1 outline-none rounded-lg w-full"
                {...register("password")}
              />
              {showPassword ? (
                <RiEyeOffFill
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
                />
              ) : (
                <RiEyeFill
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
                />
              )}
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs font-semibold">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="px-4 py-3 bg-primaryZzootec1 w-full rounded-lg mb-4  uppercase font-semibold tracking-wide hover:text-slate-500 transition-all"
          >
            Ingresar
          </button>
          <Link
            to="/forgotPassword"
            className="text-center w-fit m-auto hover:underline hover:text-gray-300 transition-all"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </form>
      </div>
      {/* <button
        onClick={() => navigate("/dashboard")}
        className="px-4 py-3 bg-primaryZzootec1 w-full rounded-lg mb-4  uppercase font-semibold tracking-wide hover:text-slate-500 transition-all"
      >
        Ingresar
      </button> */}
      <ToastContainer />
      <DevTool control={control} />
    </div>
  );
};

export default Login;
