import { NavItem } from '@/ui/components/atoms/navItem/NavItem';
import { navItems } from '@/ui/components/organizms/navPanel/schemas/navItems';
import s from './FooterNavItems.module.css';

export const FooterNavItems = () => {
    return (
        <ul className={s.footer_nav_items}>
            {navItems.map(({ to, page }) => {
                return <NavItem to={to} page={page} />;
            })}
        </ul>
    );
};
