import { PATH } from '@/app/paths/paths';

export const navItems: NavItemsType[] = [
    { page: 'Главная', to: PATH.main },
    { page: 'Про нас', to: PATH.about },
    { page: 'Калькулятор', to: PATH.prices },
    { page: 'Наши работы', to: PATH.services },
    { page: 'Администратор', to: PATH.admin },
];

export type NavItemsType = {
    page: string;
    to: string;
};
