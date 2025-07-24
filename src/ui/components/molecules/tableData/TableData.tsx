import { useClickOutside } from '@/app/hooks/useClickOutside';
import { ChangeEvent, FC } from 'react';
import { Input } from '@/authAdmin/components/input/Input';
import { Button } from '@/ui/components/atoms/button/Button';
import s from './TableData.module.css';

type TableDataProps = {
    title: string;
    data: Array<{ key: string; value: string | number | boolean | null }>;
    editingId: string | null;
    editableValue: string;
    onEdit: (id: string, value: string) => void;
    onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
    onSave: (key: string) => void;
    loading: boolean;
    onCancelEdit: () => void;
};

export const TableData: FC<TableDataProps> = ({
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
                        <th>Ключ</th>
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
                                        disabled={loading}
                                        className={s.table_input}
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
                            <td
                                className={`${s.table_btn} ${loading ? s.disabled : ''}`}
                            >
                                {editingId === key ? (
                                    <Button
                                        title={'Save'}
                                        typeBtn={'table_btn'}
                                        onClick={() => onSave(key)}
                                        disabled={loading}
                                    />
                                ) : (
                                    <Button
                                        title='Edit'
                                        typeBtn='table_btn'
                                        onClick={() =>
                                            onEdit(key, String(value))
                                        }
                                        disabled={loading}
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
