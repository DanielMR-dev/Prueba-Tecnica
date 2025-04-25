import { Link } from "react-router-dom";
import { FaCar } from "react-icons/fa";

export default function LandingPage() {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6 overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-contain"></div>
            <div className="relative z-10 text-center max-w-2xl">
                <div className="flex justify-center mb-6 animate-bounce">
                    <FaCar className="text-6xl text-indigo-600" />
                </div>
                <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-blue-500 mb-4"
                >Gestor de Vehículos</h1>
                <p className="text-lg text-gray-700 mb-8"
                >Registra y consulta la información de tus vehículos de manera sencilla y eficiente.</p>
                <div className="flex justify-center space-x-4">
                <Link
                    to="/registro"
                    className="px-8 py-3 font-medium rounded-full shadow-lg transform transition-all hover:-translate-y-1 active:scale-95 bg-indigo-600 text-white hover:bg-indigo-700"
                >Registrar Vehículo</Link>
                <Link
                    to="/vehiculos"
                    className="px-8 py-3 font-medium rounded-full shadow-lg transform transition-all hover:-translate-y-1 active:scale-95 border-2 border-indigo-600 text-indigo-600 bg-transparent hover:border-indigo-700 hover:text-indigo-700"
                >Ver Vehículos</Link>
                </div>
            </div>
        </div>
    );
};
