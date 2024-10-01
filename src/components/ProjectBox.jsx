export const ProjectBox = ({title, subtitle, description, img, link}) => {
    return (
        <article className="project-box">
            <img src={img} alt={title} title={title}/>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noreferrer">Ir al Sitio</a>
        </article>
    )
}