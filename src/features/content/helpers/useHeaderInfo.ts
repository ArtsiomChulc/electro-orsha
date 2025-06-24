import { useAppDispatch } from '@/app/hooks/hooks';
import {
    setLoadingContent,
    setHeaderInfo,
    HeaderInfoType,
} from '@/features/content/contentSlice';
import { db } from '@/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { useEffect } from 'react';

export const useHeaderInfo = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        const getCol = async () => {
            dispatch(setLoadingContent(true));
            try {
                const snapshot = await getDocs(collection(db, 'header_info'));
                snapshot.docs.forEach(doc => {
                    const data = doc.data() as HeaderInfoType;
                    dispatch(setHeaderInfo(data));
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
