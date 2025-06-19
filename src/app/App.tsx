import '../styles/App.css';
import { Layout } from '@/app/layout/Layout';
import { PATH } from '@/app/paths/paths';
import { AboutUs } from '@/pages/about/AboutUs';
import { MainPage } from '@/pages/main/MainPage';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path={PATH.about} element={<AboutUs />} />
            </Route>
        </Routes>
    );
}

export default App;
