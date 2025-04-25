interface Props {
    onBack: () => void
    onViewList: () => void
};

export default function VehicleFormButtons({ onBack, onViewList }: Props) {
    return (
        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
            <button
                type="button"
                onClick={onBack}
                className="flex-1 px-8 py-3 font-medium rounded-full shadow-lg transition hover:-translate-y-1 active:scale-95 bg-gray-400 text-white"
            >Volver al Inicio</button>
            <button
                type="submit"
                className="flex-1 px-8 py-3 font-medium rounded-full shadow-lg transition hover:-translate-y-1 active:scale-95 bg-indigo-600 text-white"
            >Registrar Vehículo</button>
            <button
                type="button"
                onClick={onViewList}
                className="flex-1 px-8 py-3 font-medium rounded-full shadow-lg transition hover:-translate-y-1 active:scale-95 border-2 border-indigo-600 text-indigo-600 bg-transparent hover:border-indigo-700 hover:text-indigo-700"
            >Ver Vehículos</button>
        </div>
    );
};
