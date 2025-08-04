import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CachorrosPages } from './pages/CachorrosPages';
import { CachorrosFormPage } from './pages/CachorrosFormPage';
import { Navigation } from './components/Navigation';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      {/* Contenedor principal centrado */}
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Contenido centrado */}
          <div className="flex flex-col items-center">
            <Navigation />
            
            <main className="w-full mt-8">
              <Routes>
                <Route path="/" element={<Navigate to="/cachorros" />} />
                <Route path="/cachorros" element={<CachorrosPages />} />
                <Route path="/cachorros-create" element={<CachorrosFormPage />} />
                <Route path="/cachorros/:id" element={<CachorrosFormPage />} />
              </Routes>
            </main>
          </div>
        </div>
        <Toaster position="bottom-center" />
      </div>
    </BrowserRouter>
  );
}

export default App;