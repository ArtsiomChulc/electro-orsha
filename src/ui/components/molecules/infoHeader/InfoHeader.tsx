import { Skeleton } from '@/ui/components/atoms/skeleton/Skeleton';
import { ReactNode } from 'react';
import s from './InfoHeader.module.css';

type LocationHeaderProps = {
    svg: ReactNode;
    text: string;
    subText: string | number;
    isLoading: boolean;
};

export const InfoHeader = ({
    subText,
    text,
    svg,
    isLoading,
}: LocationHeaderProps) => {
    return (
        <>
            {isLoading ? (
                <Skeleton
                    height={'46px'}
                    width={'234px'}
                    borderRadius={'6px'}
                />
            ) : (
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
            )}
        </>
    );
};
