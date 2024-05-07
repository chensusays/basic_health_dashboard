import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from '@Services/store.ts';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PatientInfo from '@Components/PatientInfo.tsx';
import ErrorPage from '@Components/ErrorPage.tsx';

export const routePaths = {
    home: '/',
    patient: '/patient/:name',
};

export const router = createBrowserRouter([
    {
        path: routePaths.home,
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: routePaths.patient,
        element: <PatientInfo />,
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider
                router={router}
                fallbackElement={<p>Loading...</p>}
            />
        </Provider>
    </React.StrictMode>
);
