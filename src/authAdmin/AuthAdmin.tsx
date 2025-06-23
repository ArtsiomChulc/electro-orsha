import { SignIn } from '@/authAdmin/components/SignIn';
import s from './AuthAdmin.module.css';

export const AuthAdmin = () => {
    return (
        <div className={s.auth_container}>
            <SignIn />
        </div>
    );
};
