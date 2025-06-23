import { db } from '@/firebase';
import { HeroBlock } from '@/ui/components/molecules/heroBlock/HeroBlock';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';

export const MainPage = () => {
    useEffect(() => {
        const getCol = async () => {
            const snapshot = await getDocs(collection(db, 'hero_block'));
            snapshot.docs.forEach(doc => {
                const data = doc.data();
                console.log(`${doc.id} =>`, data);
            });
        };

        getCol().catch(e => {
            console.error('Ошибка при получении документов:', e);
        });
    }, []);
    return (
        <>
            <HeroBlock />
        </>
    );
};
