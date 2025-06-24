import { useAppSelector } from '@/app/hooks/hooks';
import { useAdminAuth } from '@/app/hooks/useAdminAuth';
import { AdminPanel } from '@/ui/adminPanel/AdminPanel';
import { Footer } from '@/ui/components/organizms/footer/Footer';
import { Header } from '@/ui/components/organizms/header/Header';
import { NavPanel } from '@/ui/components/organizms/navPanel/NavPanel';
import { Outlet } from 'react-router';

import s from './Layout.module.css';

export const Layout = () => {
    const isAdmin = useAppSelector(state => state.admin.isAdmin);
    const isLoading = useAppSelector(state => state.admin.isLoading);

    useAdminAuth();
    return (
        <main className={s.main}>
            <Header />
            <NavPanel isAdmin={isAdmin} isLoading={isLoading} />
            <div className={s.main_content}>
                {isAdmin ? <AdminPanel /> : <Outlet />}
            </div>
            <Footer />
        </main>
    );
};
