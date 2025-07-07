import s from './PricesBlock.module.css';

export const PricesBlock = () => {
    return (
        <div className={s.prices_container}>
            <form></form>

            <span>
                Внимание: Расчёт носит предварительный характер и может меняться
                в зависимости от объёма и сложности работ.
            </span>
        </div>
    );
};
