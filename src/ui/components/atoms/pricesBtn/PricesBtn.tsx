import { PATH } from '@/app/paths/paths';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import s from './PricesBtn.module.css';

export const PricesBtn = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <Link
            to={PATH.prices}
            className={s.prices_button}
            aria-label='Онлайн-калькулятор'
        >
            💡
        </Link>
    );
};
