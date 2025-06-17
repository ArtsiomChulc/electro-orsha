import { Logo } from '@/ui/components/atoms/logo/Logo';
import s from './Header.module.css';

export const Header = () => {
    return (
        <div className={s.header}>
            <Logo logoTitle={'ELECTRO'}/>
        </div>
    );
};