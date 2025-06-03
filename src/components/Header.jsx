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
            <header className={scrolled ? 'scrolled' : 
            
            'position-sticky top-0 bg-[#212529] text-[#F83D3D] py-4 px-8 border-b-2 border-[#F83D3D] transition-all duration-300 ease-in-out z-50 w-max display-flex justify-end items-center'}>
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