import { HeroBlock } from '@/ui/components/molecules/heroBlock/HeroBlock';
import { Header } from '@/ui/components/organizms/header/Header';
import { NavPanel } from '@/ui/components/organizms/navPanel/NavPanel';
import s from './MainPage.module.css';

export const MainPage = () => {
    return (
        <div className={s.main_page}>
            <Header />
            <NavPanel />
            <HeroBlock />
        </div>
    );
};
