import { Layout } from '@/app/layout/Layout';
import { PATH } from '@/app/paths/paths';
import { AuthAdmin } from '@/authAdmin/AuthAdmin';
import { AboutUs } from '@/pages/about/AboutUs';
import { MainPage } from '@/pages/main/MainPage';
import { NotFound } from '@/pages/notFound/NotFound';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        errorElement: <NotFound />,
        children: [
            { index: true, Component: MainPage },
            { path: PATH.about, Component: AboutUs },
            { path: PATH.admin, Component: AuthAdmin },
        ],
    },
]);
