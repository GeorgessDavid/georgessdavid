import propTypes from 'prop-types';

export const ProjectBox = ({ title, technologies, subtitle, description, img, link }) => {
    return (
        <article className="project-box">
            <img src={img} alt={title} title={title} className="pb-img" />
            <div className="pb-technologies">
                {
                    technologies.map((technology, index) => {
                        return <img src={technology.img} alt={technology.name} title={technology.name} key={index} />
                    })
                }
            </div>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noreferrer" title={title}>Ir al Sitio</a>
        </article>
    )
}

ProjectBox.propTypes ={
    title: propTypes.string.isRequired,
    technologies: propTypes.array.isRequired,
    subtitle: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    img: propTypes.string.isRequired,
    link: propTypes.string.isRequired
}