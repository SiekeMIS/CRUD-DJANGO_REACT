import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CachorrosPages } from './pages/CachorrosPages';
import { CachorrosFormPage } from './pages/CachorrosFormPage';
import { Navigation } from './components/Navigation';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      {/* Contenedor principal que ocupa toda la pantalla */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        {/* Contenedor centrado con ancho máximo y padding responsivo */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Navigation />
          
          {/* Tarjeta contenedora del contenido principal */}
          <main className="w-full bg-white rounded-xl shadow-lg p-6 mt-8">
            <Routes>
              <Route path="/" element={<Navigate to="/cachorros" />} />
              <Route path="/cachorros" element={<CachorrosPages />} />
              <Route path="/cachorros-create" element={<CachorrosFormPage />} />
              <Route path="/cachorros/:id" element={<CachorrosFormPage />} />
            </Routes>
          </main>
        </div>
        
        <Toaster position="bottom-center" />
      </div>
    </BrowserRouter>
  );
}

export default App;