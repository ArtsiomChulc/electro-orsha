import { Loader } from '@/ui/components/atoms/loader/Loader';
import { InputHTMLAttributes } from 'react';
import s from './Input.module.css';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
    loading?: boolean;
};

export const Input = ({ error, loading, ...props }: InputProps) => {
    return (
        <>
            {loading ? (
                <Loader
                    justifyContent={'flex-start'}
                    size={30}
                    container_height={'100%'}
                    container_width={'100%'}
                    color={'#0a44cf'}
                />
            ) : (
                <input className={s.input} {...props} />
            )}
            {error && <span className={s.error}>{error}</span>}
        </>
    );
};
