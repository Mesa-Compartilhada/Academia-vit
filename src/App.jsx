import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Cadastro from './pages/cadastro';
import Home from './pages/home';
import Login from './pages/login';
import Treino from './pages/treino';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Treino" element={<Treino />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
