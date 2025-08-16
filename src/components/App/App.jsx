import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import "./App.css";

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));
const TruckDetailsPage = lazy(() => import('../../pages/TruckDetailsPage/TruckDetailsPage'));

function App() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/catalog' element={<CatalogPage />} />
            <Route path='/catalog/:id' element={<TruckDetailsPage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;