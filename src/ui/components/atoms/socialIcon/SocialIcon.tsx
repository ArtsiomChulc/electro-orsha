type SocialIconProps = {
    href: string;
    icon: string;
    alt: string;
    width: number;
    height: number;
};

export const SocialIcon = ({
    height,
    icon,
    alt,
    width,
    href,
}: SocialIconProps) => {
    return (
        <a href={href} target={'_blank'}>
            <img src={icon} alt={alt} width={width} height={height} />
        </a>
    );
};
