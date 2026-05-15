import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="realisations" element={<PortfolioPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="mentions-legales" element={<LegalPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
