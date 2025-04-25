import { useNavigate } from 'react-router-dom';
import { useVehicles } from '@/hooks/useVehicles';
import VehicleModal from '@/components/VehicleModal';
import FilterBar from '@/components/FilterBar';
import VehicleGrid from '@/components/VehicleGrid';
import Pagination from '@/components/Pagination';
import ConfirmModal from '@/components/ConfirmModal';

export default function VehicleList() {
    const navigate = useNavigate();
    const {
        paginatedVehicles,
        totalPages,
        currentPage,
        setCurrentPage,
        filterType,
        setFilterType,
        filterOptions,
        filterValue,
        setFilterValue,
        handleFilter,
        clearFilter,
        selected,
        setSelected,
        confirmDeletePlate,
        setConfirmDeletePlate,
        deleteVehicle,
    } = useVehicles();

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6 overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-contain"></div>
            <div className="relative z-10 w-full max-w-7xl space-y-6">
                <h1 className="text-4xl font-extrabold leading-snug mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-blue-500"
                >Vehículos Registrados</h1>
                <FilterBar
                    filterType={filterType}
                    setFilterType={setFilterType}
                    filterOptions={filterOptions}
                    filterValue={filterValue}
                    setFilterValue={setFilterValue}
                    clearFilter={clearFilter}
                    onFilter={handleFilter}
                    onBack={() => navigate('/')}
                    onNew={() => navigate('/registro')}
                />
                <VehicleGrid
                    vehicles={paginatedVehicles}
                    onDelete={plate => setConfirmDeletePlate(plate)}
                    onSelect={setSelected}
                />
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    setPage={setCurrentPage}
                />
                <ConfirmModal
                    isOpen={!!confirmDeletePlate}
                    message={<>¿Eliminar vehículo con placa <strong>{confirmDeletePlate}</strong>?</>}
                    onCancel={() => setConfirmDeletePlate(null)}
                    onConfirm={() => {
                        deleteVehicle(confirmDeletePlate!);
                        setConfirmDeletePlate(null);
                    }}
                />
            </div>
            {selected && <VehicleModal vehicle={selected} onClose={() => setSelected(null)} />}
        </div>
    );
};
