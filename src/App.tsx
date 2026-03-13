import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import PoliticasPrivacidade from './pages/PoliticasPrivacidade.tsx';
import TermosUso from './pages/TermosUso.tsx';
import ExclusaoDados from './pages/ExclusaoDados.tsx';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="politica-de-privacidade" element={<PoliticasPrivacidade />} />
          <Route path="termos-de-uso" element={<TermosUso />} />
          <Route path="exclusao-de-dados" element={<ExclusaoDados />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
