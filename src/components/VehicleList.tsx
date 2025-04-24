import { useEffect, useState } from 'react';
import { Vehicle } from '../types';
import { useNavigate } from 'react-router-dom';

export default function VehicleList() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const stored = localStorage.getItem('vehiculos');
        if (stored) {
        setVehicles(JSON.parse(stored));
        }
    }, []);

    const handleDelete = (plate: string) => {
        const updated = vehicles.filter((v) => v.plate !== plate);
        setVehicles(updated);
        localStorage.setItem('vehiculos', JSON.stringify(updated));
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 flex flex-col items-center">
        <div className="max-w-7xl w-full">
            <h1 className="text-3xl font-bold text-center text-blue-700 mb-10">
            Vehículos Registrados
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.length === 0 ? (
                <p className="text-center text-gray-500 col-span-full">
                No hay vehículos registrados.
                </p>
            ) : (
                vehicles.map((vehicle) => (
                <div
                    key={vehicle.plate}
                    className="bg-white rounded-2xl shadow-lg p-6 space-y-3 border border-blue-100 hover:shadow-2xl transition-all duration-300"
                >
                    <div className="flex justify-between items-center mb-2">
                    <h2 className="text-2xl font-semibold text-blue-700">
                        {vehicle.plate}
                    </h2>
                    <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                        {vehicle.brand} {vehicle.model}
                    </span>
                    </div>
                    <p className="text-gray-600"><strong>Año:</strong> {vehicle.year}</p>

                    <div className="pt-2 border-t text-sm space-y-1">
                    <div>
                        <strong className="text-blue-700">Propietario:</strong> {vehicle.owner.fullName}<br />
                        <span className="text-gray-500">{vehicle.owner.email}</span>
                    </div>
                    <div>
                        <strong className="text-blue-700">Tenedor:</strong> {vehicle.holder.fullName}<br />
                        <span className="text-gray-500">{vehicle.holder.email}</span>
                    </div>
                    <div>
                        <strong className="text-blue-700">Conductor:</strong> {vehicle.driver.fullName}<br />
                        <span className="text-gray-500">{vehicle.driver.email}</span>
                    </div>
                    </div>

                    <button
                    onClick={() => handleDelete(vehicle.plate)}
                    className="w-full mt-4 text-lg font-semibold px-6 py-3 rounded shadow transition-all bg-red-600 text-white hover:bg-red-700 hover:scale-105"
                    >
                    Eliminar
                    </button>
                </div>
                ))
            )}
            </div>

            {/* Botones de navegación */}
            <div className="flex justify-center gap-4 mt-12">
            <button
                onClick={() => navigate('/registro')}
                className="text-lg font-semibold px-6 py-3 rounded shadow transition-all bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
            >
                Registrar Nuevo Vehículo
            </button>
            <button
                onClick={() => navigate('/')}
                className="text-lg font-semibold px-6 py-3 rounded shadow transition-all bg-gray-500 text-white hover:bg-gray-600 hover:scale-105"
            >
                Volver al Inicio
            </button>
            </div>
        </div>
        </div>
    );
}
