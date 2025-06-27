import s from './Loader.module.css';

type LoaderProps = {
    size?: number;
    color?: string;
    container_width?: number | string;
    container_height?: number | string;
};

export const Loader = ({
    color,
    size,
    container_width = '100%',
    container_height = '1rem',
}: LoaderProps) => {
    return (
        <div
            style={{
                width: `${container_width}`,
                height: `${container_height}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div
                className={s.loader}
                style={{
                    width: size,
                    height: size,
                    borderColor: `${color} transparent ${color} transparent`,
                }}
            />
        </div>
    );
};
