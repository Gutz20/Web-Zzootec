import { FormSchemaLogin, formLoginSchema } from "@/types";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { RiMailFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  //TODO Cambiar Esquema de tipado
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormSchemaLogin>({
    resolver: zodResolver(formLoginSchema),
    mode: "onChange",
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormSchemaLogin> = async () => {
    toast.success("Login exitoso!", { theme: "dark" });

    setTimeout(() => {
      navigate("/dashboard");
    }, 4000);
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
          Recuperar Contraseña
        </h1>
        <form
          className="flex flex-col gap-2 w-full"
          onSubmit={handleSubmit(onSubmit)}
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
              />
            </div>
            {errors.username && (
              <p className="text-red-500 text-xs font-semibold">
                {errors.username.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="px-4 py-3 bg-primaryZzootec1 w-full rounded-lg mb-4  uppercase font-semibold tracking-wide hover:text-slate-500 transition-all"
          >
            Enviar Instrucciones
          </button>
          <span className="text-center w-fit m-auto">
            ¿Ya tienes cuenta?{" "}
            <Link
              to="/"
              className="text-slate-500 hover:text-slate-400 transition-colors"
            >
              Ingresa
            </Link>
          </span>
        </form>
      </div>

      <ToastContainer />
      <DevTool control={control} />
    </div>
  );
};

export default ForgotPassword;
