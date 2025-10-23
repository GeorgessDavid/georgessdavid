import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="w-full h-16 border-b-2 border-(--text-red) sticky top-0 flex items-center px-4">
            <nav>
                <ul className="flex space-x-4">
                    <NavLink to="/" label="Sobre Mí" />
                    <NavLink to="/proyectos" label="Proyectos" />
                    <NavLink to="/cv" label="CV Virtual" />
                    <NavLink to="/technologies" label="Tecnologías" />
                </ul>
            </nav>
        </header>
    )
}

export default Header;

interface NavLinkProps {
    to: string;
    label: string;
}

const NavLink = ({ to, label }: NavLinkProps) => {
    return (
        <li>
            <Link to={to} className="text-(--text-red) hover:text-white transition-all duration-300 uppercase after:content-[''] after:block after:w-0 hover:after:w-full after:h-0.5 after:bg-(--text-red) hover:after:bg-white after:transition-all after:duration-300">
                {label}
            </Link>
        </li>
    )
}