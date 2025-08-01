import { ProjectBox } from './ProjectBox.jsx';
import { DownloadButton } from './DownloadButton.jsx';
import { useProjects } from '../hooks/useProjects.js';
import { useTechnologies } from '../hooks/useTechnologies.js';
import { Carousel } from './Carousel.jsx';

export const Main = () => {
    const { projects } = useProjects();
    const { technologies, loading } = useTechnologies();

    const handleDownload = () => {
        const cvId = import.meta.env.VITE_CV_DOWNLOAD_ID;
        const link = document.createElement('a');
        link.href = `https://drive.google.com/uc?export=download&id=${cvId}`;
        link.download = 'CV_Georges_Ammiel_David.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <main>
            <section className="main-section">
                <h1 className="main-title">Full-Stack <br /> Web Developer</h1>
            </section>
            <section className="main-tecnologies" id="tecnologies">
                <h1 id="tecnologies">Tecnologías</h1>
                <Carousel technologies={technologies} loading={loading}/>
            </section>
            <section className='main-aboutme' id="aboutMe">
                <h1>Sobre Mí</h1>
                <div>

                    <p>
                        Soy desarrollador full-stack enfocado en construir soluciones web que sean escalables, seguras y fáciles de usar.
                        <br />
                        <br />
                        Trabajo con tecnologías como <strong>Next.js</strong> y <strong>React.js</strong> en el front-end, mientras que en el back-end desarrollo APIs REST utilizando <strong>TypeScript</strong>, <strong>Express.js</strong> y bases de datos como <strong>MySQL</strong> o <strong>SQL Server</strong>.
                        <br />
                        <br />
                        Actualmente, formo parte del equipo de desarrollo de un sistema médico en línea para gestionar historias clínicas, con validaciones complejas, autenticación por roles y generación de informes automatizados.
                        <br />
                        <br />
                        También tengo formación académica en desarrollo de software y experiencia en el ámbito de la salud, lo que me permite comprender mejor las necesidades de los usuarios y crear soluciones efectivas.
                        <br />
                        <br />
                        Me motiva crear herramientas que optimicen procesos y mejoren la experiencia de los usuarios en su día a día.
                    </p>
                    <img src="/profile.jpeg" alt="profile.jpeg" />
                </div>
            </section>
            <section className="main-projects" id="projects">
                <h1>Proyectos</h1>
                <div>
                    {
                        projects.map((project, index) => {
                            return <ProjectBox
                                key={index}
                                title={project.title}
                                technologies={project.technologies}
                                subtitle={project.subtitle}
                                description={project.description}
                                img={project.img}
                                link={project.link} />
                        })
                    }
                </div>
            </section>
            <div className='download-wrapper' onClick={handleDownload}>
                <div className="download-wrapper-button">
                    <DownloadButton />
                    <span>Descargar CV</span>
                </div>
            </div>
        </main>
    )
}