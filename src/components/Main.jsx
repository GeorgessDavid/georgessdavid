import { ProjectBox } from './ProjectBox.jsx';
import { DownloadButton } from './DownloadButton.jsx';
import { useProjects } from '../hooks/useProjects.js';
import { useTechnologies } from '../hooks/useTechnologies.js';


export const Main = () => {
    const { projects } = useProjects();
    const { technologies } = useTechnologies();
    return (
        <main>
            <section className="main-section">
                <h1 className="main-title">Full-Stack <br /> Web Developer</h1>
            </section>
            <section className="main-tecnologies" id="tecnologies">
                {
                    technologies.map((technology, index) => {
                        return <img src={technology.img} alt={technology.title} title={technology.title} key={index} />
                    })
                }
            </section>
            <section className='main-aboutme' id="aboutMe">
                <h1>Sobre Mí</h1>
                <div>

                    <p>
                        Soy un desarrollador web full-stack con una fuerte habilidad en la creación de endpoints para APIs usando Node.JS. Actualmente, curso una tecnicatura en desarrollo de software, lo que refuerza mis conocimientos prácticos y teóricos.
                        <br />
                        <br />
                        He completado un curso de desarrollo web Full Stack, trabajando con el stack MERN, pero utilizando MySQL en lugar de MongoDB.
                        <br />
                        <br />
                        Actualmente, estoy en el equipo de desarrollo de un sistema médico online para gestionar historias clínicas e informes. Este proyecto personal no está disponible al público por razones de privacidad.
                        <br />
                        <br />

                        <br />
                        Tengo experiencia como recepcionista en un consultorio, lo que me ha dotado de habilidades organizativas y de atención al cliente.
                        <br />
                        <br />
                        Estoy en busca de mi primera oportunidad laboral formal en IT como desarrollador. Me interesa resolver problemas y crear soluciones que mejoren la experiencia del usuario y la eficiencia operativa.
                        <br />
                    </p>
                    <img src="/profile.jpeg" alt="profile.jpeg" />
                </div>
            </section>
            <section className="main-projects" id="projects">
                <h1>Proyectos</h1>
                <div>
                    {
                        projects.map((project, index) => {
                            return <ProjectBox key={index} title={project.title} technologies={project.technologies} subtitle={project.subtitle} description={project.description} img={project.img} link={project.link} />
                        })
                    }
                </div>
            </section>
            <div className='download-wrapper'>
                <div className="download-wrapper-button">
                    <DownloadButton />
                    <span>Descargar CV</span>
                </div>
            </div>
        </main>
    )
}