import { Button } from '@/ui/components/atoms/button/Button';
import s from './HeroBlockContent.module.css';

export const HeroBlockContent = () => {
    return (
        <div className={s.hero_content}>
            <h2>БЕЗОПАСНО И НАДЕЖНО</h2>
            <p>Мы — сервис, которому вы можете доверять</p>
            <Button typeBtn={'contact_btn'} title={'Свяжитесь с' + ' нами'} />
        </div>
    );
};
