import { useAppSelector } from '@/app/hooks/hooks';
import heroImg from '@/assets/img/hero_image.png';
import { Image } from '@/ui/components/atoms/image/Image';
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
            <Image
                src={heroImg}
                alt='hero image'
                title={'БЕЗОПАСНО И НАДЕЖНО'}
                subtitle={'Мы — сервис, которому вы можете доверять'}
                buttonLabel={'Связаться с нами'}
            />
        </div>
    );
};
