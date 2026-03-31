import { Link } from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download';
import { useTheme } from '../theme';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import type { ReactNode } from 'react';

const Header = () => {
    const { theme, setPreference } = useTheme();

    return (
        <header className="w-full h-16 border-b-2 z-50 border-(--border-primary) bg-(--bg-surface-low)/85 backdrop-blur-xl sticky top-0 px-8 flex items-center justify-around">
            <span className="text-(--text-primary) font-bold">DESARROLLADOR_WEB</span>
            <nav>
                <ul className="flex space-x-4">
                    <NavLink to="/" label="Inicio" />
                    <NavLink to="/about" label="Sobre Mí" />
                    <NavLink to="/proyectos" label="Proyectos" />
                    <NavLink to="/#contacto" label="Contacto" />
                    <NavLink to="/technologies" label="Tecnologías" />
                </ul>
            </nav>
            <div className="flex items-center gap-3">
                <ThemeButton
                    label={<LightModeIcon />}
                    isActive={theme === 'light'}
                    onClick={() => setPreference('light')}
                />
                <ThemeButton
                    label={<DarkModeIcon />}
                    isActive={theme === 'dark'}
                    onClick={() => setPreference('dark')}
                />
                <button className="bg-(--bg-accent) px-4 py-2 text-white font-bold cursor-pointer hover:bg-(--gradient-accent-to) transition-all duration-300 font-(family-name:--font-family-spacegrotesk) uppercase"><DownloadIcon />Descargar CV</button>
            </div>
        </header>
    )
}

export default Header;

interface NavLinkProps {
    to: string;
    label: string;
}

interface ThemeButtonProps {
    // label: 'Light' | 'Dark';
    label: ReactNode;
    isActive: boolean;
    onClick: () => void;
}

const ThemeButton = ({ label, isActive, onClick }: ThemeButtonProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-pressed={isActive}
            className={` transition-colors cursor-pointer ${isActive
                ? 'border-(--border-accent)  text-(--text-accent)'
                : 'border-(--border-primary) text-(--text-muted) hover:text-(--text-primary) hover:border-(--border-accent)'}`}
        >
            {label}
        </button>
    )
}

const NavLink = ({ to, label }: NavLinkProps) => {
    return (
        <li>
            <Link to={to} className="text-(--text-muted) font-bold font-(family-name:--font-family-spacegrotesk) hover:text-(--text-secondary) transition-all duration-300 uppercase after:content-[''] after:block after:w-0 hover:after:w-full after:h-0.5 after:bg-(--text-secondary) hover:after:bg-(--text-secondary) after:transition-all after:duration-300">
                {label}
            </Link>
        </li>
    )
}
