import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { CachorrosPages } from './pages/CachorrosPages';
import { CachorrosFormPage } from './pages/CachorrosFormPage';
import {Navigation} from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/cachorros" />} />
        <Route path="/cachorros" element={<CachorrosPages />} />
        <Route path="/cachorros-create" element={<CachorrosFormPage />} />
        <Route path="/cachorros/:id" element={<CachorrosFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
