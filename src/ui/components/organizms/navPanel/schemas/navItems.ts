import { PATH } from '@/app/paths/paths';

export const navItems: NavItemsType[] = [
    { page: 'Главная', to: PATH.main },
    { page: 'Про нас', to: PATH.about },
    { page: 'Цены', to: PATH.prices },
    { page: 'Наши работы', to: PATH.services },
    { page: 'Контакты', to: PATH.contact },
    { page: 'Администратор', to: PATH.admin },
];

export type NavItemsType = {
    page: string;
    to: string;
};
