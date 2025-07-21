import { FC } from 'react';
import s from './Skeleton.module.css';

type SkeletonProps = {
    width?: number | string;
    height?: number | string;
    borderRadius?: number | string;
};

export const Skeleton: FC<SkeletonProps> = ({
    width = '100%',
    height = '1rem',
    borderRadius = 6,
}) => {
    return (
        <div
            className={s.skeleton}
            style={{
                width,
                height,
                borderRadius,
            }}
        />
    );
};
