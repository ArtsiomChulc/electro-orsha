import { useAppSelector, useAppDispatch } from '@/app/hooks/hooks';
import { setPriceInfo, setLoadingContent } from '@/features/price/priceSlice';
import { db } from '@/firebase';
import { TableData } from '@/ui/components/molecules/tableData/TableData';
import { doc, updateDoc } from 'firebase/firestore';
import { useState, ChangeEvent } from 'react';
import { toast } from 'react-toastify';
import s from '../TableEdit.module.css';

export const PriceTableEdit = () => {
    const dispatch = useAppDispatch();
    const priceData = useAppSelector(state => state.price.priceInfo);
    const loading = useAppSelector(state => state.price.isLoadingContent);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editableValue, setEditableValue] = useState<string>('');

    const priceDataMap = Object.entries(priceData).map(([key, value]) => ({
        key,
        value,
    }));

    const handleEdit = (id: string, value: string) => {
        setEditingId(id);
        setEditableValue(value);
    };

    const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > 40) {
            toast('Вводи не больше 40 символов', {
                type: 'error',
                autoClose: 3000,
                position: 'bottom-left',
                style: { background: '#ba0707', color: '#fff' },
            });
            return;
        }
        setEditableValue(e.target.value);
    };

    const handleSave = async (key: string) => {
        dispatch(setLoadingContent(true));
        try {
            const docRef = doc(db, 'prices', '1yYFwazFAvZXgVMKGApo');
            await updateDoc(docRef, {
                [key]: editableValue,
            });

            dispatch(
                setPriceInfo({
                    ...priceData,
                    [key]: editableValue,
                })
            );
            setEditingId(null);
            setEditableValue('');
            dispatch(setLoadingContent(false));
        } catch (error) {
            console.error('Ошибка при обновлении документа:', error);
            dispatch(setLoadingContent(false));
        } finally {
            dispatch(setLoadingContent(false));
        }
    };

    return (
        <div className={s.edit_container}>
            <TableData
                title={'Изменение цены'}
                data={priceDataMap}
                editingId={editingId}
                editableValue={editableValue}
                onEdit={handleEdit}
                onChangeValue={handleChangeValue}
                onSave={handleSave}
                loading={loading}
                onCancelEdit={() => setEditingId(null)}
            />
        </div>
    );
};
