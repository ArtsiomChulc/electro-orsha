import { useAppDispatch } from '@/app/hooks/hooks';
import { Input } from '@/authAdmin/components/input/Input';
import { ADMIN_EMAILS } from '@/authAdmin/schemas';
import { setUser, setLoading } from '@/features/admin/adminSlice';
import { auth } from '@/firebase';
import { Button } from '@/ui/components/atoms/button/Button';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import s from './SignIn.module.css';

export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const login = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setLoading(true));
        signInWithEmailAndPassword(auth, email, password)
            .then(user => {
                const email = user.user.email;
                if (!email) {
                    setError('Ошибка: email отсутствует');
                    return;
                }
                if (typeof user.user.email === 'string') {
                    dispatch(
                        setUser({
                            email: user.user.email,
                            isAdmin: ADMIN_EMAILS.includes(user.user.email),
                        })
                    );
                }

                navigate('/', { replace: true });

                toast('Ты вошёл как АДМИН', {
                    type: 'success',
                    autoClose: 3000,
                    position: 'bottom-left',
                    style: { background: '#084bda', color: '#fff' },
                });

                setError('');
                setPassword('');
                setEmail('');
            })
            .catch((error: FirebaseError) => {
                console.error(error);
                toast(error.message, {
                    type: 'error',
                    autoClose: 3000,
                    position: 'bottom-left',
                    style: { background: '#ba0707', color: '#fff' },
                });
                setError('Ты точно Админ?');
            })
            .finally(() => {
                dispatch(setLoading(false));
                setError('');
            });
    };
    return (
        <form className={s.sign_in_container} onSubmit={login}>
            <Input
                placeholder={'Введите ваш email'}
                type={'email'}
                value={email}
                onChange={event => setEmail(event.target.value)}
            />
            <Input
                placeholder={'Введите ваш пароль'}
                type={'password'}
                error={error}
                value={password}
                onChange={event => setPassword(event.target.value)}
            />
            <Button title={'Войти'} typeBtn={'log_in'} />
        </form>
    );
};
