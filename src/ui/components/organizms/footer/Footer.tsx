import { useAppSelector } from '@/app/hooks/hooks';
import { FooterNavItems } from '@/ui/components/atoms/footerNavItems/FooterNavItems';
import { Logo } from '@/ui/components/atoms/logo/Logo';
import { Skeleton } from '@/ui/components/atoms/skeleton/Skeleton';
import { SocialIcon } from '@/ui/components/atoms/socialIcon/SocialIcon';
import { socialIconsSchemas } from '@/ui/components/organizms/footer/schemas';
import s from './Footer.module.css';

export const Footer = () => {
    const infoHeader = useAppSelector(state => state.content.headerInfo);
    const isLoadingContent = useAppSelector(
        state => state.content.isLoadingContent
    );
    return (
        <footer className={s.footer}>
            <div className={s.footer_info}>
                <Logo isLightLogo logoTitle={'ELECTRO'} />

                <div className={s.text_info}>
                    <p className={s.desc_text}>
                        Имееем более чем 8-летний опыт работы в отрасли
                    </p>
                    {isLoadingContent ? (
                        <>
                            <Skeleton
                                height={'20px'}
                                width={'100%'}
                                borderRadius={'6px'}
                            />
                            <Skeleton
                                height={'20px'}
                                width={'100%'}
                                borderRadius={'6px'}
                            />
                            <Skeleton
                                height={'20px'}
                                width={'100%'}
                                borderRadius={'6px'}
                            />
                        </>
                    ) : (
                        <p className={s.address}>
                            <span>
                                {infoHeader.index}, {infoHeader.address_country}
                            </span>
                            <span>{infoHeader.address_city}</span>
                            <span>{infoHeader.email}</span>
                            <span>{infoHeader.phone}</span>
                        </p>
                    )}
                </div>
            </div>
            <div className={s.footer_nav}>
                <FooterNavItems />
            </div>
            <div className={s.footer_social}>
                {socialIconsSchemas.map(({ icon, alt, link }) => (
                    <SocialIcon
                        key={alt}
                        href={link}
                        icon={icon}
                        alt={alt}
                        width={30}
                        height={30}
                    />
                ))}
            </div>
        </footer>
    );
};
