import { NavItems } from '@/ui/components/molecules/navItems/NavItems';
import { navItems } from '@/ui/components/organizms/navPanel/schemas/navItems';
import s from './NavPanel.module.css';

export const NavPanel = () => {
    return (
        <div className={s.nav_panel}>
            <NavItems items={navItems} />
        </div>
    );
};
