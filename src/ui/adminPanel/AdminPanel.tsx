import { useAppSelector } from '@/app/hooks/hooks';
import { CommonEditTable } from '@/features/commonEditTable/CommonEditTable';
import { setHeaderInfo, HeaderInfoType } from '@/features/content/contentSlice';
import { setPriceInfo, PriceType } from '@/features/price/priceSlice';
import s from './AdminPanel.module.css';

export const AdminPanel = () => {
    const headerData = useAppSelector(state => state.content.headerInfo);
    const priceData = useAppSelector(state => state.price.priceInfo);
    const loadingPrice = useAppSelector(state => state.price.isLoadingContent);
    const loadingHeader = useAppSelector(
        state => state.content.isLoadingContent
    );
    return (
        <div className={s.admin_container}>
            <CommonEditTable<HeaderInfoType>
                data={headerData}
                path={'header_info'}
                pathSegment={'u68vAztyyynLVwTfjmDD'}
                title={'Содержимое шапки'}
                setData={setHeaderInfo}
                loading={loadingHeader}
            />
            <CommonEditTable<PriceType>
                data={priceData}
                path={'prices'}
                pathSegment={'1yYFwazFAvZXgVMKGApo'}
                title={'Изменение цены'}
                setData={setPriceInfo}
                loading={loadingPrice}
            />
        </div>
    );
};
