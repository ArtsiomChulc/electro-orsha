import { FooterNavItems } from '@/ui/components/atoms/footerNavItems/FooterNavItems';
import { Logo } from '@/ui/components/atoms/logo/Logo';
import s from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.footer_info}>
                <Logo isLightLogo logoTitle={'ELECTRO'} />
                <div className={s.text_info}>
                    <p className={s.desc_text}>
                        Имееем более чем 8-летний опыт работы в отрасли
                    </p>
                    <p className={s.address}>
                        0012, Chiranci Street Kano, Nigeria
                        electro@mailservice.com +2348100112233
                    </p>
                </div>
            </div>
            <div className={s.footer_nav}>
                <FooterNavItems />
            </div>
            <div className={s.footer_social}></div>
        </footer>
    );
};
