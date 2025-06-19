import { ReactNode } from 'react';
import s from './InfoHeader.module.css';

type LocationHeaderProps = {
    svg: ReactNode;
    text: string;
    subText: string | number;
};

export const InfoHeader = ({ subText, text, svg }: LocationHeaderProps) => {
    return (
        <div className={s.info_container}>
            {svg}
            <div>
                <p className={s.text}>{text}</p>
                {typeof subText === 'number' ? (
                    <p className={s.phone_number}>{subText}</p>
                ) : (
                    <p className={s.address}>{subText}</p>
                )}
            </div>
        </div>
    );
};
