import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import propTypes from 'prop-types';
import { Skeleton } from '@mui/material'
import './styles/slick.css';
import './styles/slick-theme.css';


export const Carousel = ({ technologies, loading }) => {

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

    const array = new Array(slidesToShow).fill('s');

    return (
        <div className='carousel-container'>
            {
                !loading ?
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
                    :
                    <div className='d-flex justify-between'>
                        {
                            array.map((_, index) => {
                                return <Skeleton key={index} variant='circular' width={150} height={150} animation="wave" />
                            })
                        }
                    </div>
            }
        </div>
    )
}


Carousel.propTypes = {
    technologies: propTypes.array.isRequired,
    loading: propTypes.bool.isRequired
}