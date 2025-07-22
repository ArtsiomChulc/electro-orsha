import { NavLink } from 'react-router';
import s from './NavItem.module.css';

type NavItemProps = {
    page: string;
    to: string;
    isFooter?: boolean;
};

export const NavItem = ({ page, to, isFooter = false }: NavItemProps) => {
    return (
        <li className={s.nav_item}>
            <NavLink
                className={({ isActive }) =>
                    isActive ? (isFooter ? s.active_footer : s.active) : ''
                }
                to={to}
            >
                {page}
            </NavLink>
        </li>
    );
};
