import { useAppSelector, useAppDispatch } from '@/app/hooks/hooks';
import { Location } from '@/assets/svgs/Location';
import { Mobile } from '@/assets/svgs/Mobile';
import { logout } from '@/features/admin/adminSlice';
import { Button } from '@/ui/components/atoms/button/Button';
import { InfoHeader } from '@/ui/components/molecules/infoHeader/InfoHeader';
import { Logo } from '@/ui/components/atoms/logo/Logo';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase';
import s from './Header.module.css';

export const Header = () => {
    const dispatch = useAppDispatch();
    const isAdmin = useAppSelector(state => state.admin.isAdmin);

    const logOutHandler = () => {
        signOut(auth);
        dispatch(logout());
    };
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
                {isAdmin && (
                    <Button
                        title={'Выйти'}
                        typeBtn={'log_in'}
                        onClick={logOutHandler}
                    />
                )}
            </div>
            <Button title={'Заказать услугу'} typeBtn={'header_btn'} />
        </div>
    );
};
