import viber from '@/assets/icons/viber.png';
import tg from '@/assets/icons/telegram.png';
import insta from '@/assets/icons/instagram.png';
import wp from '@/assets/icons/whatsapp.png';

interface SocialIcon {
    icon: string;
    link: string;
    alt: string;
}

export const socialIconsSchemas: SocialIcon[] = [
    {
        icon: viber,
        link: '/',
        alt: 'viber',
    },
    {
        icon: tg,
        link: '/',
        alt: 'telegram',
    },
    {
        icon: insta,
        link: '/',
        alt: 'instagram',
    },
    {
        icon: wp,
        link: '/',
        alt: 'whatsapp',
    },
];
