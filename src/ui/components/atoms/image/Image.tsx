import { Button } from '@/ui/components/atoms/button/Button';
import React, { useState } from 'react';
import s from './Image.module.css';

type ImageProps = {
    src: string;
    alt?: string;
    className?: string;
    onClick?: () => void;
    title?: string;
    subtitle?: string;
    buttonLabel?: string;
    onButtonClick?: () => void;
};

export const Image: React.FC<ImageProps> = ({
    src,
    alt = '',
    className = '',
    onClick,
    title,
    subtitle,
    buttonLabel,
    onButtonClick,
}) => {
    const [loaded, setLoaded] = useState(false);
    const onButtonClickHandler = () => {
        if (onButtonClick) {
            onButtonClick();
        }
    };

    return (
        <div className={`${s.imageWrapper} ${className}`} onClick={onClick}>
            <img
                src={src}
                alt={alt}
                className={`${s.image} ${loaded ? s.loaded : s.loading}`}
                onLoad={() => setLoaded(true)}
                loading='lazy'
            />
            {(title || subtitle) && (
                <div className={s.overlay}>
                    <div className={s.overlayText}>
                        {title && <h2 className={s.title}>{title}</h2>}
                        {subtitle && <p className={s.subtitle}>{subtitle}</p>}
                    </div>
                </div>
            )}

            {buttonLabel && (
                <Button
                    position={'left'}
                    typeBtn={'contact_btn'}
                    onClick={onButtonClickHandler}
                    title={buttonLabel}
                    className={s.button}
                />
            )}
        </div>
    );
};
