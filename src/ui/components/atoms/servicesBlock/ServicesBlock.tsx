import services_1 from '@/assets/img/services_1.png';
import services_2 from '@/assets/img/services_2.png';
import services_3 from '@/assets/img/services_3.png';
import { Image } from '@/ui/components/atoms/image/Image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import s from './ServicesBlock.module.css';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const ServicesBlock = () => {
    const slides = [services_1, services_2, services_3];
    return (
        <div className={s.slider_container}>
            <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                effect={'creative'}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation
                pagination={{ clickable: true }}
                loop
                spaceBetween={30}
                slidesPerView={1}
                className={`mySwiper`}
            >
                {slides.map((img, index) => (
                    <SwiperSlide key={index}>
                        <Image src={img} alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
