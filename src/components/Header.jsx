import { useState, useEffect } from 'react';

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    return (
        <header className={scrolled ? 'scrolled' : null}>
            <nav>
                <ul>
                    <li><a href="#tecnologies">Tecnologías</a></li>
                    <li><a href="#aboutMe">Sobre Mí</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                </ul>
            </nav>
        </header>
    )
}