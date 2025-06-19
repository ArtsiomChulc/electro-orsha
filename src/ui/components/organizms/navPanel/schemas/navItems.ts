import { PATH } from '@/app/paths/paths';

export const navItems: NavItemsType[] = [
    { page: 'Главная', to: PATH.main },
    { page: 'Про нас', to: PATH.about },
    { page: 'Наши работы', to: PATH.services },
    { page: 'Контакты', to: PATH.contact },
];

export type NavItemsType = {
    page: string;
    to: string;
};
