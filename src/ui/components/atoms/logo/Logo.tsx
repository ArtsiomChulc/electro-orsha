import { HealthIcons } from '@/assets/svgs/HealthIcons';
import { HealthIconsLight } from '@/assets/svgs/HealthIconsLight';
import s from './Logo.module.css';

type LogoProps = {
    logoTitle: string;
    isLightLogo: boolean;
};

export const Logo = ({ logoTitle, isLightLogo = false }: LogoProps) => {
    return (
        <div className={s.logo_container}>
            {isLightLogo ? <HealthIconsLight /> : <HealthIcons />}
            <p className={`${isLightLogo ? s.light : s.gradient}`}>
                {logoTitle}
            </p>
        </div>
    );
};
