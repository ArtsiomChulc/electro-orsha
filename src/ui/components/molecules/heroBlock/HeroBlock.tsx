import { useAppSelector } from '@/app/hooks/hooks';
import heroImg from '@/assets/img/hero_image.png';
import { HeroBlockContent } from '@/ui/components/atoms/heroBlockContent/HeroBlockContent';
import { Loader } from '@/ui/components/atoms/loader/Loader';
import s from './HeroBlock.module.css';

export const HeroBlock = () => {
    const loading = useAppSelector(state => state.admin.isLoading);

    if (loading)
        return (
            <Loader size={50} container_height={'100vh'} color={'#002992'} />
        );
    return (
        <div className={s.hero_block}>
            <img src={heroImg} alt='hero image' />
            <HeroBlockContent />
        </div>
    );
};
