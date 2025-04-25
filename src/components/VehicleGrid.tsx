import { Vehicle } from '../types';
import VehicleCard from '@/components/VehicleCard';
interface VehicleGridProps {
    vehicles: Vehicle[];
    onDelete: (plate: string) => void;
    onSelect: (vehicle: Vehicle) => void;
};

export default function VehicleGrid({ vehicles, onDelete, onSelect }: VehicleGridProps) {
    if (vehicles.length === 0) {
        return (
            <p className="text-center text-gray-500 col-span-full"
            >No hay vehículos que coincidan con tu búsqueda.</p>
        );
    };
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map(vehicle => (
                <VehicleCard
                    key={vehicle.plate}
                    vehicle={vehicle}
                    onDelete={onDelete}
                    onSelect={onSelect}
                />
            ))}
        </div>
    );
};
