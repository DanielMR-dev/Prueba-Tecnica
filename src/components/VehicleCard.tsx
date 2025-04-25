import { Vehicle } from '../types';
interface VehicleCardProps {
    vehicle: Vehicle;
    onDelete: (plate: string) => void;
    onSelect: (vehicle: Vehicle) => void;
};

export default function VehicleCard({ vehicle, onDelete, onSelect }: VehicleCardProps) {
    return (
        <div
            className="bg-white rounded-2xl shadow-lg p-6 space-y-4 border border-indigo-100 transform transition-all hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
            onClick={() => onSelect(vehicle)}
        >
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-extrabold text-indigo-700 uppercase"
                >{vehicle.plate}</h2>
                <span className="bg-indigo-100 text-indigo-700 text-sm px-3 py-1 rounded-full font-medium uppercase"
                >{vehicle.brand} {vehicle.model}</span>
            </div>
            <p className="text-gray-600">
                <strong className="text-indigo-700">Año:</strong> {vehicle.year}
            </p>
            <div className="pt-4 border-t border-indigo-100 space-y-1">
                <div>
                    <strong className="text-indigo-700">Propietario:</strong> {vehicle.owner.fullName}
                </div>
                <div>
                    <strong className="text-indigo-700">Tenedor:</strong> {vehicle.holder.fullName}
                </div>
                <div>
                    <strong className="text-indigo-700">Conductor:</strong> {vehicle.driver.fullName}
                </div>
            </div>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onDelete(vehicle.plate);
                }}
                className="w-full mt-4 px-6 py-3 text-lg font-semibold rounded-full shadow-lg transform transition-all hover:-translate-y-1 active:scale-95 bg-red-600 text-white"
            >Eliminar</button>
        </div>
    );
};