import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import { Vehicle, Person } from '../types';

export interface VehicleFormState {
    plate: string;
    brand: string;
    model: string;
    year: string;
    owner: Person;
    holder: Person;
    driver: Person;
};

export function useVehicleForm(initial?: Partial<VehicleFormState>) {
    const emptyPerson: Person = { fullName: '', id: '', phone: '', email: '' };
    const [form, setForm] = useState<VehicleFormState>({
        plate: '',
        brand: '',
        model: '',
        year: '',
        owner: emptyPerson,
        holder: emptyPerson,
        driver: emptyPerson,
        ...initial,
    });
    const [invalid, setInvalid] = useState<Set<string>>(new Set());

    function handleChange(section: keyof VehicleFormState | '', field: string, value: string) {
        if (section) {
            setForm(f => ({
                ...f,
                [section]: { ...(f as any)[section], [field]: value },
            }));
        } else {
            setForm(f => ({ ...f, [field]: value }));
        };
    };

    function validate(): boolean {
        const inv = new Set<string>();
        const plateRegex = /^[A-Za-z]{3}-?\d{3}$/;
        if (!plateRegex.test(form.plate)) {
            toast.error('Placa inválida: debe ser 3 letras y 3 números (p.ej. ABC123 o ABC-123).');
            inv.add('plate');
        };
        const yearNum = Number(form.year);
        const yearRegex = /^\d{1,4}$/;
        if (!yearRegex.test(form.year) || isNaN(yearNum) || yearNum <= 1900) {
            toast.error('Año inválido: debe ser un número >1900 y como máximo 4 dígitos.');
            inv.add('year');
        };
        const generalFields = [form.brand, form.model];
        if (generalFields.some(v => !v)) inv.add('general');
        const people = [form.owner, form.holder, form.driver];
        const peopleValid = people.every(
            p => p.fullName && p.id && p.phone && p.email
        );
        if (!peopleValid) inv.add('people');
        setInvalid(inv);
        return inv.size === 0;
    }

    function reset() {
        setForm({
            plate: '',
            brand: '',
            model: '',
            year: '',
            owner: emptyPerson,
            holder: emptyPerson,
            driver: emptyPerson,
        });
        setInvalid(new Set());
    }

    function handleSubmit(onSuccess: (vehicle: Vehicle) => void) {
        return (e: React.FormEvent) => {
            e.preventDefault();
            if (!validate()) {
                toast.error('Todos los campos son obligatorios.');
                return;
            };

            // Verificar duplicados por placa
            const storedVehicles = JSON.parse(localStorage.getItem('vehiculos') || '[]') as Vehicle[];
            if (storedVehicles.some(v => v.plate.toUpperCase() === form.plate.toUpperCase())) {
                toast.error('Ya existe un vehículo con esa placa.');
                setInvalid(new Set(['plate']));
                return;
            };

            const vehicle: Vehicle = {
                id: uuidv4(),
                createdAt: new Date().toISOString(),
                plate: form.plate,
                brand: form.brand,
                model: form.model,
                year: Number(form.year),
                owner: form.owner,
                holder: form.holder,
                driver: form.driver,
            };
            onSuccess(vehicle);
            toast.success('Vehículo registrado correctamente.');
            reset();
        };
    }
    return { form, invalid, handleChange, handleSubmit, reset };
};
