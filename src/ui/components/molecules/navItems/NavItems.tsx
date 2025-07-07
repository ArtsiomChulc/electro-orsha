import { useClickOutside } from '@/app/hooks/useClickOutside';
import { useWindowSize } from '@/app/hooks/useWindowSize';
import { NavItem } from '@/ui/components/atoms/navItem/NavItem';
import { NavItemsType } from '@/ui/components/organizms/navPanel/schemas/navItems';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import s from './NavItems.module.css';

type NavItemsProps = {
    items: NavItemsType[];
};

export const NavItems = ({ items }: NavItemsProps) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const { width } = useWindowSize();
    const ref = useClickOutside<HTMLDivElement>(() => setIsOpenMenu(false));
    const isMobileMenu = width < 655;
    const handlerOpenMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    };
    const location = useLocation();

    useEffect(() => {
        setIsOpenMenu(false);
    }, [location.pathname]);

    return (
        <div className={s.nav_wrapper} ref={ref}>
            <ul className={s.nav_list}>
                {isMobileMenu ? (
                    <div
                        onClick={handlerOpenMenu}
                        className={s.burger_menu_wrapper}
                    >
                        <span
                            className={`${s.burger_menu} ${isOpenMenu ? s.menu_open : ''}`}
                        ></span>
                    </div>
                ) : (
                    items.map(({ to, page }) => {
                        return <NavItem key={to} page={page} to={to} />;
                    })
                )}
                {isOpenMenu && (
                    <div className={s.mobile_menu_container}>
                        <ul className={s.nav_list_mobile}>
                            {items.map(({ to, page }) => {
                                return <NavItem key={to} page={page} to={to} />;
                            })}
                        </ul>
                    </div>
                )}
            </ul>
        </div>
    );
};
