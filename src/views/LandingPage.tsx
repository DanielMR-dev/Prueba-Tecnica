import { NavLink, Route, Routes } from "react-router";

export default function LandingPage() {
    return (
        <>
            <div className="min-h-screen bg-gray-100 p-4">
                <nav className="flex justify-center space-x-4 mb-4">
                    <NavLink
                        to="/registro"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded text-white transition ${
                                isActive ? 'bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
                            }`
                        }
                    >
                        Registrar Vehículo
                    </NavLink>
                    <NavLink
                        to="/vehiculos"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded text-white transition ${
                                isActive ? 'bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
                            }`
                        }
                    >
                        Ver Vehículos
                    </NavLink>
                </nav>
                <Routes>
                <Route path="/registro" element={<VehicleForm />} />
                <Route path="/vehiculos" element={<VehicleList />} />
                <Route path="*" element={<VehicleForm />} />
                </Routes>
            </div>
        </>
    )
}
