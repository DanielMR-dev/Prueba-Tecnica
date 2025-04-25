import React, { useState } from 'react';
import { Person, Vehicle } from '../types';
import { useNavigate } from 'react-router-dom';

const personFieldLabels: Record<keyof Person, string> = {
    fullName: 'Nombre completo',
    id: 'Documento de identidad',
    phone: 'Teléfono',
    email: 'Correo electrónico',
};

export default function VehicleForm() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        plate: '',
        brand: '',
        model: '',
        year: '',
        owner: { fullName: '', id: '', phone: '', email: '' },
        holder: { fullName: '', id: '', phone: '', email: '' },
        driver: { fullName: '', id: '', phone: '', email: '' },
    });

    const handleInputChange = (section: string, field: string, value: string) => {
        if (['plate', 'brand', 'model', 'year'].includes(field)) {
            setForm({ ...form, [field]: value });
        } else if (['owner', 'holder', 'driver'].includes(section)) {
            setForm({
                ...form,
                [section]: {
                    ...(form as any)[section],
                    [field]: value,
                },
            });
        }
    };
      

    const validateForm = (): boolean => {
        const generalFields = [form.plate, form.brand, form.model, form.year];
        const people: Person[] = [form.owner, form.holder, form.driver];
        const personFieldsValid = people.every(
            (p) => p.fullName && p.id && p.phone && p.email
        );
        return generalFields.every((f) => f !== '') && personFieldsValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            alert('Todos los campos son obligatorios');
            return;
        }

        const newVehicle: Vehicle = {
            plate: form.plate,
            brand: form.brand,
            model: form.model,
            year: parseInt(form.year),
            owner: form.owner,
            holder: form.holder,
            driver: form.driver,
        };

        const stored = localStorage.getItem('vehiculos');
        const existing: Vehicle[] = stored ? JSON.parse(stored) : [];

        if (existing.some((v) => v.plate === newVehicle.plate)) {
            alert('Ya existe un vehículo con esa placa.');
            return;
        }

        localStorage.setItem('vehiculos', JSON.stringify([...existing, newVehicle]));
        alert('Vehículo registrado correctamente');
        resetForm();
    };

    const resetForm = () => {
        setForm({
            plate: '',
            brand: '',
            model: '',
            year: '',
            owner: { fullName: '', id: '', phone: '', email: '' },
            holder: { fullName: '', id: '', phone: '', email: '' },
            driver: { fullName: '', id: '', phone: '', email: '' },
        });
    };

    const renderPersonSection = (
        title: string,
        key: 'owner' | 'holder' | 'driver'
    ) => (
        <div className="border rounded p-3 space-y-2 bg-white shadow">
            <h3 className="text-lg font-semibold">{title}</h3>
            {(Object.keys(personFieldLabels) as (keyof Person)[]).map((field) => (
                <input
                    key={field}
                    type="text"
                    placeholder={personFieldLabels[field]}
                    className="w-full p-2 border rounded"
                    value={form[key][field]}
                    onChange={(e) => handleInputChange(key, field, e.target.value)}
                />
            ))}
        </div>
    );
    

    return (
        <div 
            className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6"
        >
            <form
                onSubmit={handleSubmit}
                className="space-y-6 max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg"
            >
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-2"
                >Registro de Vehículo</h2>

                {/* Datos del vehículo */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Placa"
                        className="p-3 border rounded"
                        value={form.plate}
                        onChange={(e) => handleInputChange('', 'plate', e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Marca"
                        className="p-3 border rounded"
                        value={form.brand}
                        onChange={(e) => handleInputChange('', 'brand', e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Modelo"
                        className="p-3 border rounded"
                        value={form.model}
                        onChange={(e) => handleInputChange('', 'model', e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Año"
                        className="p-3 border rounded"
                        value={form.year}
                        onChange={(e) => handleInputChange('', 'year', e.target.value)}
                    />
                </div>

                {/* Secciones de personas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {renderPersonSection('Propietario', 'owner')}
                    {renderPersonSection('Tenedor', 'holder')}
                    {renderPersonSection('Conductor', 'driver')}
                </div>

                {/* Botón de registrar */}
                <button
                    type="submit"
                    className="w-full text-lg font-semibold px-6 py-3 rounded shadow transition-all bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
                >Registrar vehículo</button>

                {/* Navegación */}
                <div className="flex justify-between mt-4">
                    <button
                        type="button"
                        onClick={() => navigate('/')}
                        className="text-lg font-semibold px-6 py-3 rounded shadow transition-all bg-gray-400 text-white hover:bg-gray-500 hover:scale-105"
                    >Volver al Inicio</button>
                    <button
                        type="button"
                        onClick={() => navigate('/vehiculos')}
                        className="text-lg font-semibold px-6 py-3 rounded shadow transition-all bg-green-600 text-white hover:bg-green-700 hover:scale-105"
                    >Ver Vehículos</button>
                </div>
            </form>
        </div>
    );
}
