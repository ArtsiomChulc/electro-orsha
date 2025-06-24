import { useAdminAuth } from '@/app/hooks/useAdminAuth';
import { Footer } from '@/ui/components/organizms/footer/Footer';
import { Header } from '@/ui/components/organizms/header/Header';
import { NavPanel } from '@/ui/components/organizms/navPanel/NavPanel';
import { Outlet } from 'react-router';

import s from './Layout.module.css';

export const Layout = () => {
    useAdminAuth();
    return (
        <main className={s.main}>
            <Header />
            <NavPanel />
            <div className={s.main_content}>
                <Outlet />
            </div>
            <Footer />
        </main>
    );
};
