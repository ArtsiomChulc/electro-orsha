import heroImg from '@/assets/img/hero_image.png';
import { HeroBlockContent } from '@/ui/components/atoms/heroBlockContent/HeroBlockContent';
import s from './HeroBlock.module.css';

export const HeroBlock = () => {
    return (
        <div className={s.hero_block}>
            <img src={heroImg} alt='hero image' />
            <HeroBlockContent />
        </div>
    );
};
