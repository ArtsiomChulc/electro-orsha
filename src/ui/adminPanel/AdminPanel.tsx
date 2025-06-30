import { useAppSelector, useAppDispatch } from '@/app/hooks/hooks';
import { useClickOutside } from '@/app/hooks/useClickOutside';
import { Input } from '@/authAdmin/components/input/Input';
import {
    setHeaderInfo,
    setLoadingContent,
} from '@/features/content/contentSlice';
import { db } from '@/firebase';
import { Button } from '@/ui/components/atoms/button/Button';
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
    // const ref = useClickOutside<HTMLTableCellElement>(() => setEditingId(null));

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
            {/*<h1>Text content Management</h1>*/}
            {/*<table className={s.admin_table}>*/}
            {/*    <thead>*/}
            {/*        <tr>*/}
            {/*            <th>Контент</th>*/}
            {/*            <th>Значение</th>*/}
            {/*            <th>Действия</th>*/}
            {/*        </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*        {headerDataMap.map(({ key, value }) => {*/}
            {/*            return (*/}
            {/*                <tr key={key}>*/}
            {/*                    <td>{key}</td>*/}
            {/*                    <td ref={ref}>*/}
            {/*                        {editingId === key ? (*/}
            {/*                            <Input*/}
            {/*                                loading={loading}*/}
            {/*                                value={editableValue}*/}
            {/*                                onChange={handleChangeValue}*/}
            {/*                                onKeyDown={e => {*/}
            {/*                                    if (e.key === 'Enter') {*/}
            {/*                                        handleSave(editingId);*/}
            {/*                                    }*/}
            {/*                                }}*/}
            {/*                                autoFocus*/}
            {/*                            />*/}
            {/*                        ) : (*/}
            {/*                            value*/}
            {/*                        )}*/}
            {/*                    </td>*/}
            {/*                    <td>*/}
            {/*                        {editingId === key ? (*/}
            {/*                            <Button*/}
            {/*                                title={'Save'}*/}
            {/*                                typeBtn={'table_btn'}*/}
            {/*                                onClick={() => handleSave(key)}*/}
            {/*                            />*/}
            {/*                        ) : (*/}
            {/*                            <Button*/}
            {/*                                title='Edit'*/}
            {/*                                typeBtn='table_btn'*/}
            {/*                                onClick={() =>*/}
            {/*                                    handleEdit(key, String(value))*/}
            {/*                                }*/}
            {/*                            />*/}
            {/*                        )}*/}
            {/*                    </td>*/}
            {/*                </tr>*/}
            {/*            );*/}
            {/*        })}*/}
            {/*    </tbody>*/}
            {/*</table>*/}
        </div>
    );
};
