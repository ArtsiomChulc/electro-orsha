import { NavItem } from '@/ui/components/atoms/navItem/NavItem';
import s from './NavItems.module.css';

type NavItemsProps = {
    items: string[];
};

export const NavItems = ({ items }: NavItemsProps) => {
    return (
        <ul className={s.nav_list}>
            {items.map(item => {
                return <NavItem item={item} />;
            })}
        </ul>
    );
};
