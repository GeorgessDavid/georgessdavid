import { technologies } from '../constants/technologies';
import { TechnologyBox } from '../components/TechnologyBox';
const TechnologiesPage = () => {
    return (
        <div className="w-full py-4 lg:py-32 px-12 lg:px-32">
            <h1 className="font-(family-name:--font-family-spacegrotesk) text-7xl font-bold text-(--text-accent)">Tecnologías</h1>
            <p className="w-1/4">
            Estas son todas las tecnologías con las que trabajo.
            </p>
            <div className="w-full py-16 px-32 flex gap-4 justify-center flex-wrap">
                {technologies.map(tech => <TechnologyBox name={tech.name} logoPath={tech.logoPath} main={tech.main} />)}
            </div>
        </div>
    )
}

export default TechnologiesPage;