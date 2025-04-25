import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
interface ConfirmModalProps {
    isOpen: boolean;
    message: React.ReactNode;
    onCancel: () => void;
    onConfirm: () => void;
};

export default function ConfirmModal({
    isOpen,
    message,
    onCancel,
    onConfirm,
}: ConfirmModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <motion.div
                        className="absolute inset-0 bg-black/50"
                        onClick={onCancel}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                    <motion.div
                        className="relative z-10 bg-white p-6 rounded-2xl shadow-2xl max-w-sm w-full text-center space-y-4"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="text-xl font-bold"
                        >Confirmar acción</h2>
                        <div className="text-gray-700"
                        >{message}</div>
                        <div className="flex justify-center space-x-4 mt-4">
                            <button
                                onClick={onCancel}
                                className="px-4 py-2 rounded-full bg-gray-400 text-white font-medium hover:bg-gray-500 transition-all"
                            >Cancelar</button>
                            <button
                                onClick={onConfirm}
                                className="px-4 py-2 rounded-full bg-red-600 text-white font-medium hover:bg-red-700 transition-all"
                            >Eliminar</button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
