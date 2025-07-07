import { PricesBlock } from '@/ui/components/atoms/pricesBlock/PricesBlock';
import { ServicesBlock } from '@/ui/components/atoms/servicesBlock/ServicesBlock';
import s from './ServicePrices.module.css';

export const ServicePrices = () => {
    return (
        <div className={s.services_container}>
            <ServicesBlock />
            <PricesBlock />
        </div>
    );
};
