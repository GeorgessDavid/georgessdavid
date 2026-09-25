import { Header, Footer } from './components';
import { Home, Technologies } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-(--bg-primary) text-(--text-primary)">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<div>Proyectos</div>} />
            <Route path="/cv" element={<div>CV Virtual</div>} />
            <Route path="/technologies" element={<Technologies />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
