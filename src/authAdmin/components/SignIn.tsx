import { Input } from '@/authAdmin/components/input/Input';
import { auth } from '@/firebase';
import { Button } from '@/ui/components/atoms/button/Button';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState, FormEvent } from 'react';
import s from './SignIn.module.css';

export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const login = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(user => {
                setError('');
                setPassword('');
                setEmail('');
            })
            .catch((error: unknown) => {
                console.log(error);
                setError('Ты точно Админ?');
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
