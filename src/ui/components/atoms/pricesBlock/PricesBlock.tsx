import { Input } from '@/authAdmin/components/input/Input';
import { Button } from '@/ui/components/atoms/button/Button';
import { Switch } from '@/ui/components/atoms/switch/Switch';
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import s from './PricesBlock.module.css';

const optionsObject = ['Квартира', 'Дом', 'Офис', 'Коммерческое' + ' помещ.'];

const optionsWork = [
    'Установка розеток',
    'Замена электропроводки',
    'Монтаж проводки',
    'Освещение',
];

export const PricesBlock = () => {
    const [selectedObject, setSelectedObject] = useState<string | null>(null);
    const [selectedWork, setSelectedWork] = useState<string[]>([]);
    const [selectedSquare, setSelectedSquare] = useState<string>('');
    const [selectedDot, setSelectedDot] = useState<string>('');
    const [selectedSwitch, setSelectedSwitch] = useState('invite');
    const [selectedName, setSelectedName] = useState('');
    const [selectedPhone, setSelectedPhone] = useState('');

    const getWord = (word: string) => {
        if (word === 'invite') {
            return 'Да';
        }
        return 'Нет';
    };

    const allSelected = selectedWork.length === optionsWork.length;

    const toggleAll = () => {
        if (allSelected) {
            setSelectedWork([]);
        } else {
            setSelectedWork(optionsWork);
        }
    };

    const handleChangeObject = (value: string) => {
        setSelectedObject(prev => (prev === value ? null : value));
    };

    const handleChangeWork = (value: string) => {
        setSelectedWork(prev =>
            prev.includes(value)
                ? prev.filter(v => v !== value)
                : [...prev, value]
        );
    };

    const handleChangeSquare = (value: string) => {
        setSelectedSquare(value);
    };

    const handleChangeDot = (value: string) => {
        setSelectedDot(value);
    };

    const handleChangeName = (value: string) => {
        setSelectedName(value);
    };

    const handleChangePhone = (value: string) => {
        setSelectedPhone(value);
    };

    const onHandlerSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const templateParams = {
            name: selectedName ?? 'Не задано',
            phone: selectedPhone ?? 'Не задан',
            objectType: selectedObject ?? 'Не выбрано',
            works: selectedWork.join(', ') || 'Не выбрано',
            square: selectedSquare,
            dot: selectedDot,
            switch: getWord(selectedSwitch),
        };

        emailjs
            .send(
                'service_oca4upc',
                'template_45t6foh',
                templateParams,
                'hHY1Uv0WNdP-AHDH5'
            )
            .then(
                result => {
                    console.log('Успешно отправлено!', result.text);
                    toast('Заявка отправлена!', {
                        type: 'success',
                        autoClose: 3000,
                        position: 'bottom-left',
                        style: {
                            background: '#084bda',
                            color: '#fff',
                        },
                    });
                },
                error => {
                    console.error('Ошибка отправки:', error.text);
                    toast('Ошибка отправки заявки.', {
                        type: 'error',
                        autoClose: 3000,
                        position: 'bottom-left',
                        style: {
                            background: '#ba0707',
                            color: '#fff',
                        },
                    });
                }
            );
    };

    return (
        <div className={s.prices_container}>
            <h2>«Онлайн-калькулятор стоимости электромонтажных работ».</h2>

            <form onSubmit={onHandlerSubmit}>
                <div className={s.name}>
                    <p className={s.title}>Введите своё имя</p>
                    <Input
                        onChange={e => handleChangeName(e.target.value)}
                        value={selectedName}
                        type={'text'}
                        name={'name'}
                    />
                </div>
                <div className={s.phone}>
                    <p className={s.title}>Введите свой номер телефона</p>
                    <Input
                        onChange={e => handleChangePhone(e.target.value)}
                        value={selectedPhone}
                        type={'text'}
                        name={'phone'}
                    />
                </div>
                <div className={s.object_type}>
                    <p className={s.title}>Тип объекта</p>
                    {optionsObject.map((option, index) => {
                        return (
                            <label key={index}>
                                <Input
                                    inputType={'radio'}
                                    checked={selectedObject === option}
                                    type={'radio'}
                                    onChange={() => handleChangeObject(option)}
                                />
                                {option}
                            </label>
                        );
                    })}
                </div>

                <div className={s.square}>
                    <p className={s.title}>
                        Площадь объекта, <span>м&#178;</span>
                    </p>
                    <Input
                        onChange={e => handleChangeSquare(e.target.value)}
                        value={selectedSquare}
                        type={'text'}
                        name={'square'}
                    />
                </div>

                <div className={s.work_type}>
                    <p className={s.title}>Виды работ</p>
                    {optionsWork.map((option, index) => {
                        return (
                            <label key={index}>
                                <Input
                                    inputType={'checkbox'}
                                    checked={selectedWork.includes(option)}
                                    type={'checkbox'}
                                    onChange={() => handleChangeWork(option)}
                                />
                                {option}
                            </label>
                        );
                    })}
                    <label>
                        <Input
                            inputType={'checkbox'}
                            checked={allSelected}
                            type={'checkbox'}
                            onChange={toggleAll}
                        />
                        Выбрать все
                    </label>
                </div>

                <div className={s.dot}>
                    <p className={s.title}>Количество точек</p>
                    <Input
                        type={'text'}
                        value={selectedDot}
                        onChange={e => handleChangeDot(e.target.value)}
                        name={'dot'}
                    />
                </div>

                <div className={s.switch}>
                    <Switch
                        selectedSwitch={selectedSwitch}
                        setSelectedSwitch={setSelectedSwitch}
                    />
                </div>

                <Button
                    title={'Отправить заявку'}
                    typeBtn={'log_in'}
                    type={'submit'}
                />
            </form>

            <div className={s.warning_text}>
                <p>
                    <span>Внимание!!!</span>Цена носит ориентировочный характер
                    и будет уточнена после осмотра объекта.
                </p>
            </div>
        </div>
    );
};
