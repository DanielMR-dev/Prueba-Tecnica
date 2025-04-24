import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "@/views/LandingPage";
import VehicleForm from "@/components/VehicleForm";
import VehicleList from "@/components/VehicleList";
export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/> 
                <Route path="/registro" element={<VehicleForm />} />
                <Route path="/vehiculos" element={<VehicleList />} />
            </Routes>
        </BrowserRouter>
    );
};

