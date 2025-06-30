import { useAppSelector, useAppDispatch } from '@/app/hooks/hooks';
import {
    setHeaderInfo,
    setLoadingContent,
} from '@/features/content/contentSlice';
import { db } from '@/firebase';
import { TableData } from '@/ui/components/molecules/tableData/TableData';
import { doc, updateDoc } from 'firebase/firestore';
import { useState, ChangeEvent } from 'react';
import { toast } from 'react-toastify';
import s from './AdminPanel.module.css';

export const AdminPanel = () => {
    const dispatch = useAppDispatch();
    const headerData = useAppSelector(state => state.content.headerInfo);
    const loading = useAppSelector(state => state.content.isLoadingContent);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editableValue, setEditableValue] = useState<string>('');

    const headerDataMap = Object.entries(headerData).map(([key, value]) => ({
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
            const docRef = doc(db, 'header_info', 'u68vAztyyynLVwTfjmDD');
            await updateDoc(docRef, {
                [key]: editableValue,
            });

            dispatch(
                setHeaderInfo({
                    ...headerData,
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
        <div className={s.admin_container}>
            <TableData
                title={'Header editing'}
                data={headerDataMap}
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
