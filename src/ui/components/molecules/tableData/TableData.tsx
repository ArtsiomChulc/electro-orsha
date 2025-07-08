import { useClickOutside } from '@/app/hooks/useClickOutside';
import React from 'react';
import { Input } from '@/authAdmin/components/input/Input';
import { Button } from '@/ui/components/atoms/button/Button';
import s from './TableData.module.css';

type TableDataProps = {
    title: string;
    data: Array<{ key: string; value: string | number }>;
    editingId: string | null;
    editableValue: string;
    onEdit: (id: string, value: string) => void;
    onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSave: (key: string) => void;
    loading: boolean;
    onCancelEdit: () => void;
};

export const TableData: React.FC<TableDataProps> = ({
    title,
    data,
    editingId,
    editableValue,
    onEdit,
    onChangeValue,
    onSave,
    loading,
    onCancelEdit,
}) => {
    const ref = useClickOutside<HTMLTableCellElement>(() => onCancelEdit);
    return (
        <div className={s.admin_container}>
            <h1>{title}</h1>
            <table className={s.admin_table}>
                <thead>
                    <tr>
                        <th>Контент</th>
                        <th>Значение</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(({ key, value }) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td ref={ref}>
                                {editingId === key ? (
                                    <Input
                                        type={'text'}
                                        loading={loading}
                                        value={editableValue}
                                        onChange={onChangeValue}
                                        onKeyDown={e => {
                                            if (e.key === 'Enter') {
                                                onSave(editingId);
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
                                        onClick={() => onSave(key)}
                                    />
                                ) : (
                                    <Button
                                        title='Edit'
                                        typeBtn='table_btn'
                                        onClick={() =>
                                            onEdit(key, String(value))
                                        }
                                    />
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
