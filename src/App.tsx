import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import PoliticasPrivacidade from './pages/PoliticasPrivacidade.tsx';
import TermosUso from './pages/TermosUso.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="politica-de-privacidade" element={<PoliticasPrivacidade />} />
          <Route path="termos-de-uso" element={<TermosUso />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
