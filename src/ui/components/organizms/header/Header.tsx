import { Location } from '@/assets/svgs/Location';
import { Mobile } from '@/assets/svgs/Mobile';
import { Button } from '@/ui/components/atoms/button/Button';
import { InfoHeader } from '@/ui/components/molecules/infoHeader/InfoHeader';
import { Logo } from '@/ui/components/atoms/logo/Logo';
import s from './Header.module.css';

export const Header = () => {
    return (
        <div className={s.header}>
            <Logo logoTitle={'ELECTRO-ORSHA'} />

            <div className={s.header_info}>
                <InfoHeader
                    svg={<Location />}
                    text={'город Орша'}
                    subText={'Республика Беларусь'}
                />
                <InfoHeader
                    svg={<Mobile />}
                    text={'Звоните в любое время'}
                    subText={37529123456}
                />
            </div>
            <Button title={'Заказать услугу'} typeBtn={'header_btn'} />
        </div>
    );
};
