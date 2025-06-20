import { NavLink } from 'react-router';
import s from './NavItem.module.css';

type NavItemProps = {
    page: string;
    to: string;
};

export const NavItem = ({ page, to }: NavItemProps) => {
    return (
        <li className={s.nav_item}>
            <NavLink
                className={({ isActive }) => (isActive ? s.active : '')}
                to={to}
            >
                {page}
            </NavLink>
        </li>
    );
};
