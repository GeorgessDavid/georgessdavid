import Slider from 'react-slick';
import propTypes from 'prop-types';
import './styles/slick.css';
import './styles/slick-theme.css';


export const Carousel = ({ technologies }) => {
    const settings = {
        infinite: true,
        slidesToShow: 10,
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