import { HealthIcons } from '@/assets/svgs/HealthIcons';
import s from './Logo.module.css';

type LogoProps = {
    logoTitle: string;
}

export const Logo = ({logoTitle}: LogoProps) => {
    return (
        <div className={s.logo_container}>
            <HealthIcons />
            <p>{logoTitle}</p>
        </div>
    );
};