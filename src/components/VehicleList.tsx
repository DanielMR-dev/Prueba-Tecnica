import { useEffect, useState } from 'react';
import { Vehicle } from '../types';

export default function VehicleList() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {vehicles.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">No hay vehículos registrados.</p>
        )}

        {vehicles.map((vehicle) => (
          <div key={vehicle.plate} className="bg-white rounded-xl shadow p-4 space-y-2">
            <h2 className="text-xl font-bold">{vehicle.plate}</h2>
            <p><strong>Marca:</strong> {vehicle.brand}</p>
            <p><strong>Modelo:</strong> {vehicle.model}</p>
            <p><strong>Año:</strong> {vehicle.year}</p>

            <div className="border-t pt-2">
              <strong>Propietario:</strong>
              <p>{vehicle.owner.fullName} ({vehicle.owner.email})</p>
            </div>
            <div>
              <strong>Tenedor:</strong>
              <p>{vehicle.holder.fullName} ({vehicle.holder.email})</p>
            </div>
            <div>
              <strong>Conductor:</strong>
              <p>{vehicle.driver.fullName} ({vehicle.driver.email})</p>
            </div>

            <button
              onClick={() => handleDelete(vehicle.plate)}
              className="mt-3 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    );
}
