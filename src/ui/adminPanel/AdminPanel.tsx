import { HeaderTableEdit } from '@/ui/components/organizms/TableEdit/headerEdit/HeaderTableEdit';
import { PriceTableEdit } from '@/ui/components/organizms/TableEdit/priceEdit/PriceTableEdit';
import s from './AdminPanel.module.css';

export const AdminPanel = () => {
    return (
        <div className={s.admin_container}>
            <HeaderTableEdit />
            <PriceTableEdit />
        </div>
    );
};
