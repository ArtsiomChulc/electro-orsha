import { Header } from '@/ui/components/organizms/header/Header';
import { NavPanel } from '@/ui/components/organizms/navPanel/NavPanel';
import { Outlet } from 'react-router-dom';
import s from './Layout.module.css';

export const Layout = () => {
    return (
        <main className={s.main}>
            <Header />
            <NavPanel />
            <div className={s.main_content}>
                <Outlet />
            </div>
            <div>footer</div>
        </main>
    );
};
