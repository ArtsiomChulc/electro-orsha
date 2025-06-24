import heroImg from '@/assets/img/hero_image.png';
import adminImg from '@/assets/img/admin.webp';
import { HeroBlockContent } from '@/ui/components/atoms/heroBlockContent/HeroBlockContent';
import s from './HeroBlock.module.css';

type HeroBlockProps = {
    isAdmin: boolean;
};

export const HeroBlock = ({ isAdmin }: HeroBlockProps) => {
    return (
        <div className={s.hero_block}>
            {isAdmin ? (
                <img src={adminImg} alt='hero image' />
            ) : (
                <img src={heroImg} alt='hero image' />
            )}
            <HeroBlockContent />
        </div>
    );
};
