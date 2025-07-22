import { useAppSelector, useAppDispatch } from '@/app/hooks/hooks';
import { useWindowSize } from '@/app/hooks/useWindowSize';
import { Location } from '@/assets/svgs/Location';
import { Mobile } from '@/assets/svgs/Mobile';
import { logout } from '@/features/admin/adminSlice';
import { useHeaderInfo } from '@/features/content/helpers/useHeaderInfo';
import { auth } from '@/firebase';
import { Button } from '@/ui/components/atoms/button/Button';
import { Logo } from '@/ui/components/atoms/logo/Logo';
import { InfoHeader } from '@/ui/components/molecules/infoHeader/InfoHeader';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import s from './Header.module.css';

export const Header = () => {
    const dispatch = useAppDispatch();
    const isAdmin = useAppSelector(state => state.admin.isAdmin);
    const { width } = useWindowSize();
    const isLoadingContent = useAppSelector(
        state => state.content.isLoadingContent
    );
    const infoHeader = useAppSelector(state => state.content.headerInfo);

    useHeaderInfo();

    const logOutHandler = () => {
        signOut(auth).then(() => {
            toast('Вы вышли из редактирования', {
                position: 'bottom-left',
                autoClose: 1000,
                type: 'success',
            });
        });
        dispatch(logout());
    };
    return (
        <div className={s.header}>
            <Logo logoTitle={'ELECTRO-ORSHA'} />

            <div className={s.header_info}>
                {width >= 992 && (
                    <>
                        <InfoHeader
                            isLoading={isLoadingContent}
                            svg={<Location />}
                            text={infoHeader.address_city}
                            subText={infoHeader.address_country}
                        />
                        <InfoHeader
                            isLoading={isLoadingContent}
                            svg={<Mobile />}
                            text={'Звоните в любое время'}
                            subText={infoHeader.phone}
                        />
                    </>
                )}
                {isAdmin && (
                    <Button
                        title={'Выйти'}
                        typeBtn={'log_in'}
                        onClick={logOutHandler}
                    />
                )}
            </div>
            {width >= 576 && (
                <Button
                    size={'small'}
                    position={'right'}
                    title={'Заказать услугу'}
                    typeBtn={'header_btn'}
                />
            )}
        </div>
    );
};
