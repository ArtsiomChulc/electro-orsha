import { Skeleton } from '@/ui/components/atoms/skeleton/Skeleton';
import { NavItems } from '@/ui/components/molecules/navItems/NavItems';
import { navItems } from '@/ui/components/organizms/navPanel/schemas/navItems';
import s from './NavPanel.module.css';

type NavPanelProps = {
    isAdmin?: boolean;
    isLoading: boolean;
};

export const NavPanel = ({ isAdmin, isLoading }: NavPanelProps) => {
    if (isLoading)
        return (
            <Skeleton
                height={'40px'}
                width={'100%'}
                background={'linear-gradient(180deg, #002992 0%, #000 100%)'}
                borderRadius={'0'}
            />
        );
    return (
        <div className={s.nav_panel}>
            {isAdmin ? (
                <span className={s.edite_mode}>Режим редактирования</span>
            ) : (
                <NavItems items={navItems} />
            )}
        </div>
    );
};
