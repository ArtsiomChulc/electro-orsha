import { usePriceInfo } from '@/features/price/helpers/usePriceInfo';
import { db } from '@/firebase';
import { HeroBlock } from '@/ui/components/molecules/heroBlock/HeroBlock';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';

export const MainPage = () => {
    usePriceInfo();
    useEffect(() => {
        const getCol = async () => {
            const snapshot = await getDocs(collection(db, 'hero_block'));
            snapshot.docs.forEach(doc => {
                const data = doc.data();
                console.log(`${doc.id} =>`, data);
            });
        };

        const getAbout = async () => {
            const snapshot = await getDocs(collection(db, 'about_block'));
            snapshot.docs.forEach(doc => {
                const data = doc.data();
                console.log(`${doc.id} =>`, data);
            });
        };

        getCol().catch(e => {
            console.error('Ошибка при получении документов:', e);
        });

        getAbout().catch(e => {
            console.error('Ошибка при получении документов:', e);
        });
    }, []);
    return (
        <>
            <HeroBlock />
        </>
    );
};
