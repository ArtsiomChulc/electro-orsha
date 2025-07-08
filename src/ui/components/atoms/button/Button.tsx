import React, { ButtonHTMLAttributes } from 'react';
import s from './Button.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string;
    typeBtn:
        | 'header_btn'
        | 'contact_btn'
        | 'not_found'
        | 'log_in'
        | 'table_btn';
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({ title, typeBtn, onClick, ...props }: ButtonProps) => {
    return (
        <button onClick={onClick} className={s[typeBtn]} {...props}>
            {title}
        </button>
    );
};
