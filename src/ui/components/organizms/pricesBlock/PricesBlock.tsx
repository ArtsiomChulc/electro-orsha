import { useAppSelector } from '@/app/hooks/hooks';
import { Input } from '@/authAdmin/components/input/Input';
import { usePriceInfo } from '@/features/price/helpers/usePriceInfo';
import { Button } from '@/ui/components/atoms/button/Button';
import { Switch } from '@/ui/components/atoms/switch/Switch';
import emailjs from '@emailjs/browser';
import { useState, FormEvent } from 'react';
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
    usePriceInfo();

    const emailJsId = import.meta.env.VITE_EMAIL_JS_ID;
    const emailJsTemplateId = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
    const emailJsPublicKey = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

    const { pointPrice, meterPrice } = useAppSelector(
        state => state.price.priceInfo
    );

    const [selectedObject, setSelectedObject] = useState<string | null>(null);
    const [selectedWork, setSelectedWork] = useState<string[]>([]);
    const [selectedSquare, setSelectedSquare] = useState<string>('');
    const [selectedDot, setSelectedDot] = useState<string>('');
    const [selectedMeter, setSelectedMeters] = useState<string>('');
    const [selectedSwitch, setSelectedSwitch] = useState('invite');
    const [selectedName, setSelectedName] = useState('');
    const [selectedPhone, setSelectedPhone] = useState('');

    const [metersPrice, setMetersPrice] = useState<number | null>(null);
    const [pointsPrice, setPointsPrice] = useState<number | null>(null);
    const [allPrice, setAllPrice] = useState<number>();

    console.log(allPrice);

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

    const getAllPrice = (
        metersPrice: number | null | undefined,
        pointsPrice: number | null | undefined
    ): number => {
        const meters = metersPrice ?? 0;
        const points = pointsPrice ?? 0;
        return meters + points;
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
        setPointsPrice(+value * +pointPrice);
    };

    const handleChangeMeter = (value: string) => {
        setSelectedMeters(value);
        setMetersPrice(+value * +meterPrice);
    };

    const handleChangeName = (value: string) => {
        setSelectedName(value);
    };

    const handleChangePhone = (value: string) => {
        setSelectedPhone(value);
    };

    const onHandlerSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const calculatedAllPrice = getAllPrice(metersPrice, pointsPrice);
        setAllPrice(calculatedAllPrice);

        const templateParams = {
            name: selectedName ?? 'Не задано',
            phone: selectedPhone ?? 'Не задан',
            objectType: selectedObject ?? 'Не выбрано',
            works: selectedWork.join(', ') || 'Не выбрано',
            square: selectedSquare ?? 'Не задан',
            dot: selectedDot ?? 'Не задан',
            meters: selectedMeter ?? 'Не задан',
            pointPrice: pointPrice ?? 'Не задан',
            meterPrice: meterPrice ?? 'Не задан',
            allPrice: calculatedAllPrice,
            switch: getWord(selectedSwitch),
        };

        emailjs
            .send(
                emailJsId,
                emailJsTemplateId,
                templateParams,
                emailJsPublicKey
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

                    setSelectedName('');
                    setSelectedPhone('');
                    setSelectedObject(null);
                    setSelectedWork([]);
                    setSelectedSquare('');
                    setSelectedDot('');
                    setSelectedMeters('');
                    setSelectedSwitch('invite');
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

                <div className={s.dot}>
                    <p className={s.title}>Количество метров</p>
                    <Input
                        type={'text'}
                        value={selectedMeter}
                        onChange={e => handleChangeMeter(e.target.value)}
                        name={'meters'}
                    />
                </div>

                <div className={s.switch_container}>
                    <p className={s.title}>Нужен выезд мастера?</p>
                    <div className={s.switch}>
                        <Switch
                            selectedSwitch={selectedSwitch}
                            setSelectedSwitch={setSelectedSwitch}
                        />
                    </div>
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

            {allPrice && <div>Общая стоимость: {allPrice} BYN</div>}
        </div>
    );
};
