import { useAppDispatch } from '@/app/hooks/hooks';
import {
    setLoadingContent,
    PriceType,
    setPriceInfo,
} from '@/features/price/priceSlice';
import { db } from '@/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { useEffect } from 'react';

export const usePriceInfo = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        const getCol = async () => {
            dispatch(setLoadingContent(true));
            try {
                const snapshot = await getDocs(collection(db, 'prices'));
                snapshot.docs.forEach(doc => {
                    const data = doc.data() as PriceType;
                    dispatch(setPriceInfo(data));
                });
            } catch (e) {
                dispatch(setLoadingContent(false));
                console.error('Ошибка при получении документов:', e);
            } finally {
                dispatch(setLoadingContent(false));
            }
        };

        getCol();
    }, [dispatch]);
};
