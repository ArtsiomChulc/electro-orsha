import { Button } from '@/ui/components/atoms/button/Button';
import React, { useState } from 'react';
import styles from './Image.module.css';

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

    return (
        <div
            className={`${styles.imageWrapper} ${className}`}
            onClick={onClick}
        >
            <img
                src={src}
                alt={alt}
                className={`${styles.image} ${loaded ? styles.loaded : styles.loading}`}
                onLoad={() => setLoaded(true)}
                loading='lazy'
            />
            {(title || subtitle || buttonLabel) && (
                <div className={styles.overlay}>
                    <div className={styles.overlayText}>
                        {title && <h2 className={styles.title}>{title}</h2>}
                        {subtitle && (
                            <p className={styles.subtitle}>{subtitle}</p>
                        )}
                    </div>
                    {buttonLabel && (
                        <Button
                            position={'left'}
                            typeBtn={'contact_btn'}
                            onClick={e => {
                                e.stopPropagation();
                                onButtonClick?.();
                            }}
                            title={buttonLabel}
                        />
                    )}
                </div>
            )}
        </div>
    );
};
