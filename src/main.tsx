import { router } from '@/app/routes/routes';
import { store } from '@/app/store/store';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
            <ToastContainer />
        </Provider>
    </StrictMode>
);
