import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Layout from '../pages/layout';
import Apart from '../pages/Apart';

const Router = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/logements/:apartId" element={<Apart />} />
                <Route path="/error" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/error" replace />} />
            </Route>
        </Routes>
    );
};

export default Router;
