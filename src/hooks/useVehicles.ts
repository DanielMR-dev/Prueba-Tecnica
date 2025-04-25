import { useState, useEffect } from 'react';
import { Vehicle } from '../types';
import { toast } from 'react-toastify';

export type FilterType = 'year' | 'brand' | 'owner' | 'holder';

export function useVehicles(itemsPerPage = 6) {
    const [allVehicles, setAllVehicles] = useState<Vehicle[]>([]);
    const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
    const [filterType, setFilterType] = useState<FilterType>('year');
    const [filterOptions, setFilterOptions] = useState<string[]>([]);
    const [filterValue, setFilterValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selected, setSelected] = useState<Vehicle | null>(null);
    const [confirmDeletePlate, setConfirmDeletePlate] = useState<string | null>(null);

    useEffect(() => {
        try {
            const stored = localStorage.getItem('vehiculos')
            if (stored) {
                const parsed: Vehicle[] = JSON.parse(stored)
                parsed.sort((a, b) =>
                    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                );
                setAllVehicles(parsed)
                setFilteredVehicles(parsed)
                generateFilterOptions(parsed, filterType)
            };
        } catch {
            console.error('Error cargando vehículos de localStorage')
        };
    }, []);

    useEffect(() => {
        generateFilterOptions(allVehicles, filterType)
        setFilterValue('')
        setCurrentPage(1)
    }, [allVehicles, filterType]);

    function generateFilterOptions(data: Vehicle[], type: FilterType) {
        let opts: string[]
        if (type === 'owner') {
            opts = Array.from(new Set(data.map(v => v.owner.fullName)))
        } else if (type === 'holder') {
            opts = Array.from(new Set(data.map(v => v.holder.fullName)))
        } else {
            opts = Array.from(new Set(data.map(v => String(v[type]))))
        }
        setFilterOptions(opts);
    };

    function handleFilter() {
        if (!filterValue) {
            setFilteredVehicles(allVehicles);
            setCurrentPage(1);
            return;
        };
        let result: Vehicle[]
        if (filterType === 'owner') {
            result = allVehicles.filter(v => v.owner.fullName === filterValue)
        } else if (filterType === 'holder') {
            result = allVehicles.filter(v => v.holder.fullName === filterValue)
        } else {
            result = allVehicles.filter(v => String(v[filterType]) === filterValue)
        };
        setFilteredVehicles(result);
        setCurrentPage(1);
    };

    function deleteVehicle(plate: string) {
        const updated = allVehicles.filter(v => v.plate !== plate)
        setAllVehicles(updated)
        setFilteredVehicles(updated)
        localStorage.setItem('vehiculos', JSON.stringify(updated))
        toast.success('Vehículo eliminado correctamente')
    };

    function clearFilter() {
        setFilterValue('')         
        setFilteredVehicles(allVehicles) 
        setCurrentPage(1)            
    };

    const totalPages = Math.ceil(filteredVehicles.length / itemsPerPage)
    const start = (currentPage - 1) * itemsPerPage
    const paginatedVehicles = filteredVehicles.slice(start, start + itemsPerPage)

    return {
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
    };
};