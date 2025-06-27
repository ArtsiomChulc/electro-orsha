import { useAppSelector, useAppDispatch } from '@/app/hooks/hooks';
import { Input } from '@/authAdmin/components/input/Input';
import { setHeaderInfo } from '@/features/content/contentSlice';
import { db } from '@/firebase';
import { Button } from '@/ui/components/atoms/button/Button';
import { doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import s from './AdminPanel.module.css';

export const AdminPanel = () => {
    const dispatch = useAppDispatch();
    const headerData = useAppSelector(state => state.content.headerInfo);
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

    const handleSave = async (key: string) => {
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
        } catch (error) {
            console.error('Ошибка при обновлении документа:', error);
        }
    };

    return (
        <div className={s.admin_container}>
            <h1>Text content Management</h1>
            <table className={s.admin_table}>
                <thead>
                    <tr>
                        <th>Контент</th>
                        <th>Значение</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {headerDataMap.map(({ key, value }) => {
                        return (
                            <tr key={key}>
                                <td>{key}</td>
                                <td>
                                    {editingId === key ? (
                                        <Input
                                            value={editableValue}
                                            onChange={e =>
                                                setEditableValue(e.target.value)
                                            }
                                            onKeyDown={e => {
                                                if (e.key === 'Enter') {
                                                    handleSave(editingId);
                                                }
                                            }}
                                            autoFocus
                                        />
                                    ) : (
                                        value
                                    )}
                                </td>
                                <td>
                                    {editingId === key ? (
                                        <Button
                                            title={'Save'}
                                            typeBtn={'table_btn'}
                                            onClick={() => handleSave(key)}
                                        />
                                    ) : (
                                        <Button
                                            title='Edit'
                                            typeBtn='table_btn'
                                            onClick={() =>
                                                handleEdit(key, String(value))
                                            }
                                        />
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
