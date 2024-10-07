import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import propTypes from 'prop-types';
import './styles/slick.css';
import './styles/slick-theme.css';


export const Carousel = ({ technologies }) => {

    const [slidesToShow, setSlidesToShow] = useState(10); // Valor por defecto

    useEffect(() => {
        // Función para ajustar slides según el tamaño de la pantalla
        const handleResize = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth < 480) {
                setSlidesToShow(2); // Para móviles
            } else if (screenWidth < 768) {
                setSlidesToShow(4); // Para tablets
            } else if (screenWidth < 1024) {
                setSlidesToShow(8); // Para pantallas medianas
            } else {
                setSlidesToShow(10); // Para pantallas grandes
            }
        };

        // Agregar listener al cambiar el tamaño de la pantalla
        window.addEventListener('resize', handleResize);

        // Ejecutar al cargar por primera vez
        handleResize();

        // Eliminar listener al desmontar el componente
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const settings = {
        infinite: true,
        slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    }

    
    return (
        <div className='carousel-container'>
            <Slider {...settings}>
                {
                    technologies.map((technology, index) => {
                        return (
                            <div key={index}>
                                <img srcSet={technology.img} alt={technology.name} title={technology.name} />
                            </div>)
                    })

                }
            </Slider>
        </div>
    )
}


Carousel.propTypes = {
    technologies: propTypes.array.isRequired,
    loading: propTypes.bool.isRequired
}