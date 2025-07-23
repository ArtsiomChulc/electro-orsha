import { useAppSelector } from '@/app/hooks/hooks';
import { useAdminAuth } from '@/app/hooks/useAdminAuth';
import { PATH } from '@/app/paths/paths';
import { AdminPanel } from '@/ui/adminPanel/AdminPanel';
import { PricesBtn } from '@/ui/components/atoms/pricesBtn/PricesBtn';
import { Footer } from '@/ui/components/organizms/footer/Footer';
import { Header } from '@/ui/components/organizms/header/Header';
import { NavPanel } from '@/ui/components/organizms/navPanel/NavPanel';
import { Outlet, useLocation } from 'react-router';

import s from './Layout.module.css';

export const Layout = () => {
    const isAdmin = useAppSelector(state => state.admin.isAdmin);
    const isLoading = useAppSelector(state => state.admin.isLoading);
    const location = useLocation();

    useAdminAuth();
    return (
        <main className={s.main}>
            {!isAdmin && <Header />}
            <NavPanel isAdmin={isAdmin} isLoading={isLoading} />
            <div className={s.main_content}>
                {isAdmin ? <AdminPanel /> : <Outlet />}
            </div>
            {!isAdmin && <Footer />}
            {location.pathname !== PATH.prices && !isAdmin && <PricesBtn />}
        </main>
    );
};
