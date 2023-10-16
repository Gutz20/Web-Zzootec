const Login = () => {
  return (
    <div className="bg-loginPattern bg-fixed h-screen flex items-center justify-center bg-cover">
      <div className="flex flex-col items-center justify-center gap-4 bg-primaryZzootec2 text-white w-fit p-8 m-auto rounded-xl">
        <img
          src="./zzootiBOT.jpeg"
          alt="Logo"
          className="w-40 h-40 rounded-full shadow-lg shadow-cyan-700"
        />
        <h1 className="font-youngSerif text-4xl">
          Bienvenido a Zzootec System
        </h1>

        <form className="flex flex-col w-full">
          <label htmlFor="">Usuario</label>
          <input
            type="text"
            placeholder="Nombre de Usuario"
            className="text-white bg-transparent mb-4 p-2 outline-none border-2 border-gray-500 rounded-lg focus:border-gray-700"
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="text-white bg-transparent mb-4 p-2 outline-none border-2 border-gray-500 rounded-lg focus:border-gray-700"
          />

          <button className="px-4 py-2 bg-yellow-500 rounded-md mb-4">
            Ingresar
          </button>
          <button className="px-4 py-2 bg-red-500 rounded-md">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
