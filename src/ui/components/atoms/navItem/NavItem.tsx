import s from './NavItem.module.css';

type NavItemProps = {
    item: string;
};

export const NavItem = ({ item }: NavItemProps) => {
    return <li className={s.nav_item}>{item}</li>;
};
