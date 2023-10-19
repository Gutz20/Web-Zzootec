import { Fab } from "@mui/material";
import { useState } from "react";
import {
  RiBarChart2Line,
  RiBookMarkFill,
  RiBox3Line,
  RiCloseLine,
  RiFileList2Line,
  RiLogoutCircleRLine,
  RiMenu3Line,
  RiNodeTree,
  RiShoppingBagLine,
  RiTruckLine,
  RiUser2Line,
  RiUser3Fill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);

  return (
    <>
      <div
        className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondaryBackColor2 p-4 flex flex-col justify-between z-50 ${
          showMenu ? "left-0" : "-left-full"
        } transition-all `}
      >
        {/* TODO Ver si queda bien si no cambiar por el list de Material ui */}
        <div>
          <h1 className="text-center text-2xl font-bold text-white mb-10">
            Admin<span className="text-yellow-300 text-4xl">.</span>
          </h1>
          <ul>
            <li>
              <Link
                to="/dashboard"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-slate-950 text-white transition-colors"
              >
                <RiBarChart2Line className="text-green-300" /> Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/customers"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-slate-950 text-white transition-colors"
              >
                <RiUser3Fill className="text-green-300" /> Clientes
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/delivery"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-slate-950 text-white transition-colors"
              >
                <RiTruckLine className="text-green-300" /> Delivery
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/orders"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-slate-950 text-white transition-colors"
              >
                <RiShoppingBagLine className="text-green-300" /> Pedidos
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/products"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-slate-950 text-white transition-colors"
              >
                <RiBox3Line className="text-green-300" /> Productos
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/employees"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-slate-950 text-white transition-colors"
              >
                <RiUser2Line className="text-green-300" /> Empleados
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/marketing"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-slate-950 text-white transition-colors"
              >
                <RiNodeTree className="text-green-300" /> Marketing
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/reports"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-slate-950 text-white transition-colors"
              >
                <RiFileList2Line className="text-green-300" /> Reportes
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/assistance"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-slate-950 text-white transition-colors"
              >
                <RiBookMarkFill className="text-green-300" /> Asistencia
              </Link>
            </li>
            {/* <li>
              <Link
                to="/dashboard/marketing"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-slate-950 text-white transition-colors"
              >
                <RiHome2Line className="text-green-300" /> Sucursales
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/marketing"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-slate-950 text-white transition-colors"
              >
                <RiContactsBookUploadFill className="text-green-300" />{" "}
                Proveedores
              </Link>
            </li>
            <li>
              <button
                onClick={() => setShowSubmenu(!showSubmenu)}
                className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-slate-950 text-white transition-colors"
              >
                <span className="flex items-center gap-4">
                  <RiEarthLine className="text-green-300" /> Redes Sociales
                </span>
                <RiArrowRightSLine
                  className={`mt-1 ${
                    showSubmenu && "rotate-90"
                  } transition-all`}
                />
              </button>
              <ul
                className={`${
                  showSubmenu ? "h-[130px]" : "h-0"
                } overflow-y-hidden transition-all`}
              >
                <li className="">
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-green-300 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondaryBackColor2 hover:text-white text-gray-200 transition-colors"
                  >
                    Post red social
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondaryBackColor2 hover:text-white text-gray-200 transition-colors"
                  >
                    Estadistica
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondaryBackColor2 hover:text-white text-gray-200 transition-colors"
                  >
                    Perfiles
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-slate-950 text-white transition-colors"
              >
                <RiMessage3Line className="text-green-300" /> Mensajes
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-slate-950 text-white transition-colors"
              >
                <RiCalendarTodoLine className="text-green-300" /> Calendario
              </Link>
            </li> */}
          </ul>
        </div>
        <nav>
          <Link
            to="/dashboard"
            className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-slate-950 text-white transition-colors"
          >
            <RiLogoutCircleRLine className="text-green-300" /> Cerrar Sesion
          </Link>
        </nav>
      </div>
      {/* <div className="fixed bottom-4 right-4 p-1 bg-green-300 text-black rounded-full z-50">
        <IconButton
          onClick={() => setShowMenu(!showMenu)}
          aria-label="sidebar"
          size="medium"
        >
          {showMenu ? (
            <RiCloseLine className="text-lg" />
          ) : (
            <RiMenu3Line className="text-lg" />
          )}
        </IconButton>
      </div> */}
      <div className="xl:hidden fixed bottom-4 right-4 text-black rounded-full z-50">
        <Fab
          onClick={() => setShowMenu(!showMenu)}
          color="success"
          size="medium"
          aria-label="add"
        >
          {showMenu ? (
            <RiCloseLine className="text-lg" />
          ) : (
            <RiMenu3Line className="text-lg" />
          )}
        </Fab>
      </div>
    </>
  );
};

export default Sidebar;
