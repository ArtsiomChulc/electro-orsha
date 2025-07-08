import s from './Switch.module.css';

type SwitchProps = {
    setSelectedSwitch: (id: string) => void;
    selectedSwitch: string;
};

export const Switch = ({ setSelectedSwitch, selectedSwitch }: SwitchProps) => {
    const handleSelected = (id: string) => {
        setSelectedSwitch(id);
    };

    return (
        <div className={s.switch_container}>
            <span
                className={`${selectedSwitch === 'invite' ? s.active : ''}`}
                onClick={() => handleSelected('invite')}
            >
                Да
            </span>
            <span
                className={`${selectedSwitch === 'dontInvite' ? s.active : ''}`}
                onClick={() => handleSelected('dontInvite')}
            >
                Нет
            </span>
        </div>
    );
};
