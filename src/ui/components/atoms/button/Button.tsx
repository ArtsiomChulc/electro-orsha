import s from './Button.module.css';

type ButtonProps = {
    title: string;
    typeBtn: 'header_btn' | 'contact_btn' | 'not_found';
    onClick?: () => void;
};

export const Button = ({ title, typeBtn, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} className={s[typeBtn]}>
            {title}
        </button>
    );
};
