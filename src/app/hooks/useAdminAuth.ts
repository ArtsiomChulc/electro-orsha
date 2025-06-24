import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase';
import { setUser, logout, setLoading } from '@/features/admin/adminSlice';
import { useAppDispatch } from '@/app/hooks/hooks';

const ADMIN_EMAILS = ['test@mail.ru']; // todo

export const useAdminAuth = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setLoading(true));
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user && user.email) {
                const isAdmin = ADMIN_EMAILS.includes(user.email);
                dispatch(setUser({ email: user.email, isAdmin }));
                dispatch(setLoading(false));
            } else {
                dispatch(logout());
                dispatch(setLoading(false));
            }
        });

        return () => unsubscribe();
    }, [dispatch]);
};
