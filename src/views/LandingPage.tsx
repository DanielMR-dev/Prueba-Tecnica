import { NavLink } from "react-router-dom";
import { FaCar } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-6 flex flex-col items-center">
      <header className="text-center mb-10">
        <div className="flex justify-center items-center space-x-3 mb-4 text-blue-600">
          <FaCar className="text-5xl" />
          <h1 className="text-4xl font-bold tracking-tight">Gestor de Vehículos</h1>
        </div>
        <p className="text-gray-600 text-lg">Registra y consulta la información de tus vehículos fácilmente</p>
      </header>

      <nav className="flex space-x-6">
        <NavLink
          to="/registro"
          className={({ isActive }) =>
            `text-lg font-semibold px-6 py-3 rounded shadow transition-all ${
              isActive
                ? "bg-blue-700 text-white scale-105"
                : "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
            }`
          }
        >
          Registrar Vehículo
        </NavLink>
        <NavLink
          to="/vehiculos"
          className={({ isActive }) =>
            `text-lg font-semibold px-6 py-3 rounded shadow transition-all ${
              isActive
                ? "bg-blue-700 text-white scale-105"
                : "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
            }`
          }
        >
          Ver Vehículos
        </NavLink>
      </nav>
    </div>
  );
}
