import React from 'react';
import { Vehicle } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
interface VehicleModalProps {
    vehicle: Vehicle;
    onClose: () => void;
};

export default function VehicleModal({ vehicle, onClose }: VehicleModalProps) {
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose();
    };
    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <motion.div
                    className="absolute inset-0 bg-black/50"
                    onClick={handleBackdropClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                />
                <motion.div
                    className="relative z-10 bg-white border border-indigo-100 rounded-2xl shadow-2xl max-w-2xl w-full p-8 space-y-6 overflow-auto"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-2xl font-bold text-indigo-500 hover:text-indigo-700 uppercase"
                    >&times;</button>

                    <h2 className="text-3xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-blue-500 uppercase"
                    >{vehicle.plate}</h2>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p><strong className="text-indigo-700">Marca:</strong> {vehicle.brand}</p>
                            <p><strong className="text-indigo-700">Modelo:</strong> {vehicle.model}</p>
                        </div>
                        <div>
                            <p><strong className="text-indigo-700">Año:</strong> {vehicle.year}</p>
                            <p><strong className="text-indigo-700">Placa:</strong> {vehicle.plate}</p>
                        </div>
                    </div>

                    <div className="border-t border-indigo-100 pt-4 space-y-3 text-sm">
                        <div>
                            <strong className="text-indigo-700">Propietario:</strong><br />
                            {vehicle.owner.fullName} - {vehicle.owner.email} - {vehicle.owner.phone}
                        </div>
                        <div>
                            <strong className="text-indigo-700">Tenedor:</strong><br />
                            {vehicle.holder.fullName} - {vehicle.holder.email} - {vehicle.holder.phone}
                        </div>
                        <div>
                            <strong className="text-indigo-700">Conductor:</strong><br />
                            {vehicle.driver.fullName} - {vehicle.driver.email} - {vehicle.driver.phone}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};