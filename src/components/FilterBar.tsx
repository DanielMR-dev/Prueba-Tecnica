import { useState, useRef, useEffect } from 'react';
import { FilterType } from '../hooks/useVehicles';
import { FaFilter } from 'react-icons/fa';
interface FilterBarProps {
    filterType: FilterType;
    setFilterType: (type: FilterType) => void;
    filterOptions: string[];
    filterValue: string;
    setFilterValue: (value: string) => void;
    clearFilter: () => void;
    onFilter: () => void;
    onBack: () => void;
    onNew: () => void;
};

export default function FilterBar({
    filterType,
    setFilterType,
    filterOptions,
    filterValue,
    setFilterValue,
    clearFilter,
    onFilter,
    onBack,
    onNew,
}: FilterBarProps) {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);  

    return (
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4">
            <button
                onClick={onBack}
                className="px-6 py-3 font-medium rounded-full shadow-lg transition-transform hover:-translate-y-1 active:scale-95 bg-gray-400 text-white"
            >Volver al Inicio</button>
            <button
                onClick={onNew}
                className="px-6 py-3 font-medium rounded-full shadow-lg transition-transform hover:-translate-y-1 active:scale-95 bg-indigo-600 text-white"
            >Registrar Nuevo Vehículo</button>
            <div className="relative" ref={containerRef}>
                <button
                    onClick={() => setOpen(prev => !prev)}
                    className="p-3 bg-gray-200 rounded-full cursor-pointer transition-colors hover:bg-gray-300"
                >
                    <FaFilter className="h-6 w-6 text-indigo-600" />
                </button>
                {open && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 flex flex-col md:flex-row items-center gap-4 bg-white p-4 rounded-lg shadow-lg z-10">
                        <select
                            value={filterType}
                            onChange={e => setFilterType(e.target.value as FilterType)}
                            className="px-4 py-2 border rounded-lg shadow text-base focus:outline-none focus:ring-2 focus:ring-indigo-300"
                        >
                            <option value="year">Año</option>
                            <option value="brand">Marca</option>
                            <option value="owner">Propietario</option>
                            <option value="holder">Tenedor</option>
                        </select>
                        <select
                            value={filterValue}
                            onChange={e => setFilterValue(e.target.value)}
                            disabled={filterOptions.length === 0}
                            className="px-4 py-2 border rounded-lg shadow text-base focus:outline-none focus:ring-2 focus:ring-indigo-300 disabled:bg-gray-200"
                        >
                        <option value="">
                            {filterType === 'year' && 'Seleccionar año'}
                            {filterType === 'brand' && 'Seleccionar marca'}
                            {filterType === 'owner' && 'Seleccionar propietario'}
                            {filterType === 'holder' && 'Seleccionar tenedor'}
                        </option>
                        {filterOptions.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                        </select>
                        <button
                            onClick={() => { onFilter(); setOpen(false); }}
                            disabled={!filterValue}
                            className="px-5 py-2 font-medium rounded-full shadow-lg transition-transform hover:-translate-y-1 active:scale-95 bg-green-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                        >Filtrar</button>
                        <button
                            onClick={() => {
                                clearFilter();
                                setOpen(false);
                            }}
                            className="px-5 py-2 font-medium rounded-full shadow-lg transition-transform hover:-translate-y-1 active:scale-95 bg-red-500 text-white"
                        >Limpiar</button>
                    </div>
                )}
            </div>
        </div>
    );
};