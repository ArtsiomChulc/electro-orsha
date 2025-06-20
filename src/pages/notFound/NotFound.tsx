import { Button } from '@/ui/components/atoms/button/Button';
import { useNavigate } from 'react-router';
import s from './NotFound.module.css';

export const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className={s.not_found}>
            <h1>Whoops!</h1>
            <p>Something went wrong</p>
            <Button
                typeBtn={'not_found'}
                onClick={() => {
                    navigate({ pathname: '/' });
                }}
                title={'Go to home page'}
            />
        </div>
    );
};
