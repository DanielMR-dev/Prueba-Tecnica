import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useVehicleForm } from '../hooks/useVehicleForm';
import { Vehicle } from '../types';
import InputField from '../components/InputField';
import PersonSection from '../components/PersonSection';
import VehicleFormButtons from '../components/VehicleFormButtons';

const personLabels = {
    fullName: 'Nombre completo',
    id: 'Documento de identidad',
    phone: 'Teléfono',
    email: 'Correo electrónico',
};

const vehicleLabels = {
    plate: 'Placa',
    brand: 'Marca',
    model: 'Modelo',
    year: 'Año',
};

export default function VehicleForm() {
    const navigate = useNavigate();
    const { form, invalid, handleChange, handleSubmit, reset } = useVehicleForm();

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
            <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-contain" />
            <form
                onSubmit={handleSubmit((newVehicle) => {
                    const vehicleWithMeta = {
                      ...newVehicle,
                      id: uuidv4(),
                      createdAt: new Date().toISOString(),
                    }
                    const stored: Vehicle[] = JSON.parse(localStorage.getItem('vehiculos') || '[]')
                    localStorage.setItem(
                      'vehiculos',
                      JSON.stringify([...stored, vehicleWithMeta])
                    )
                    reset();
                })}
                className="relative z-10 w-full max-w-4xl space-y-6 bg-white p-8 rounded-xl shadow-xl overflow-auto"
            >
                <h2 className="text-4xl font-extrabold text-center leading-snug bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-blue-500 mb-6"
                >Registro de Vehículo</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(['plate', 'brand', 'model', 'year'] as const).map((key) => (
                        <InputField
                            key={key}
                            type={key === 'year' ? 'number' : 'text'}
                            placeholder={vehicleLabels[key]}
                            value={form[key] as string}
                            isInvalid={
                                (key === 'year' && invalid.has('year')) ||
                                (key === 'plate' && invalid.has('plate')) ||
                                (invalid.has('general') && key !== 'year' && key !== 'plate')
                            }
                            onChange={(v) => handleChange('', key, key == 'plate' ? v.slice(0, 6).toUpperCase() : v)}
                        />
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <PersonSection
                        title="Propietario"
                        data={form.owner}
                        labels={personLabels}
                        isInvalid={invalid.has('people')}
                        onChange={(field, value) => handleChange('owner', field, value)}
                    />
                    <PersonSection
                        title="Tenedor"
                        data={form.holder}
                        labels={personLabels}
                        isInvalid={invalid.has('people')}
                        onChange={(field, value) => handleChange('holder', field, value)}
                    />
                    <PersonSection
                        title="Conductor"
                        data={form.driver}
                        labels={personLabels}
                        isInvalid={invalid.has('people')}
                        onChange={(field, value) => handleChange('driver', field, value)}
                    />
                </div>
                <VehicleFormButtons
                    onBack={() => navigate('/')}
                    onViewList={() => navigate('/vehiculos')}
                />
            </form>
        </div>
    );
};
