import { NavItem } from '@/ui/components/atoms/navItem/NavItem';
import { NavItemsType } from '@/ui/components/organizms/navPanel/schemas/navItems';
import s from './NavItems.module.css';

type NavItemsProps = {
    items: NavItemsType[];
};

export const NavItems = ({ items }: NavItemsProps) => {
    return (
        <ul className={s.nav_list}>
            {items.map(({ to, page }) => {
                return <NavItem key={to} page={page} to={to} />;
            })}
        </ul>
    );
};
