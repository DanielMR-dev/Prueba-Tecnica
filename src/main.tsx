import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from './router.tsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
        <Router />
    </StrictMode>
);
 