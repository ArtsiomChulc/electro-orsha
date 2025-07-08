import { Loader } from '@/ui/components/atoms/loader/Loader';
import { InputHTMLAttributes, ChangeEvent } from 'react';
import s from './Input.module.css';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
    loading?: boolean;
    inputType?: 'checkbox' | 'radio';
    checked?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
    error,
    loading,
    onChange,
    inputType,
    checked,
    ...props
}: InputProps) => {
    const classNames = () => {
        if (inputType) return s[inputType];
        return s.input;
    };
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
                <input
                    className={classNames()}
                    onChange={onChange}
                    checked={checked}
                    {...props}
                />
            )}
            {inputType === 'radio' && <span className={s.radioCustom}></span>}
            {inputType === 'checkbox' && (
                <span className={s.checkboxCustom}></span>
            )}
            {error && <span className={s.error}>{error}</span>}
        </>
    );
};
