import { Header } from './components';
import { Home } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="bg-[var(--bg-color)]">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<div>Proyectos</div>} />
          <Route path="/cv" element={<div>CV Virtual</div>} />
          <Route path="/technologies" element={<div>Tecnologías</div>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App