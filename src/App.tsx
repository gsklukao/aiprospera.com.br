import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import PoliticasPrivacidade from './pages/PoliticasPrivacidade.tsx';
import TermosUso from './pages/TermosUso.tsx';
import ExclusaoDados from './pages/ExclusaoDados.tsx';
import Catalog from './pages/Catalog';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="politica-de-privacidade" element={<PoliticasPrivacidade />} />
          <Route path="termos-de-uso" element={<TermosUso />} />
          <Route path="exclusao-de-dados" element={<ExclusaoDados />} />
          <Route path="catalogo" element={<Catalog />} />

          {/* Rotas de Seção (Ancoras via HashRouter) */}
          <Route path="ecossistema" element={<Home />} />
          <Route path="solucoes" element={<Home />} />
          <Route path="como-funciona" element={<Home />} />
          <Route path="planos" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
