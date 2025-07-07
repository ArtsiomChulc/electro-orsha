import { ServicesBlock } from '@/ui/components/atoms/servicesBlock/ServicesBlock';
import s from './Services.module.css';

export const Services = () => {
    return (
        <div className={s.services_container}>
            <ServicesBlock />
        </div>
    );
};
