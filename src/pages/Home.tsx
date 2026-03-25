import { Chip, Button } from '../components';
import type { ReactNode } from 'react';
import EastIcon from '@mui/icons-material/East';
const Home = () => {
    return (
        <div className="w-full">
            <Section className="flex flex-col bg-(--bg-primary) gap-4">
                <Chip background='bg-(--bg-surface)' color='text-(--text-accent)' text="Disponible para nuevos retos" font="--font-family-spacegrotesk" uppercase />
                <div className="flex gap-2 items-center">
                    <span className='text-(--text-primary) font-bold font-(family-name:--font-family-spacegrotesk) text-8xl'>Hola, soy</span>
                    <span className='text-(--text-accent) font-bold font-(family-name:--font-family-ubuntu) text-8xl'>Georges David</span>
                </div>
                <p className="text-(--text-secondary) text-2xl w-5/12">
                    Desarrollador Full-Stack enfocado en construir sistemas reales, escalables y orientados a negocio.
                    <br />
                    Experiencia en Next.js, TypeScript y arquitecturas backend, desarrollando soluciones que optimizan procesos y mejoran la experiencia del usuario.
                </p>
                <div className="flex gap-8">
                    <Button background='--bg-accent' color='--text-inverse' style='filled' action='href' link='/projects'>
                        Ver proyectos <EastIcon />
                    </Button>
                    <Button background='--bg-accent' color='--text-primary' style='outlined'>
                        Contactar
                    </Button>
                </div>
                <div className="w-50 h-50 border-r-4 border-r-(--text-accent) border-b-4 border-b-(--text-accent) opacity-40 absolute right-10 top-7/12"></div>
            </Section>
            <Section className="bg-(--bg-surface-middle) w-full py-24">
                <h2 className="text-(--text-secondary) font-(family-name:--font-family-spacegrotesk) uppercase font-bold">Portfolio</h2>
                <div className="flex w-full justify-between items-center">
                    <h1 className="text-(--text-primary) font-(family-name:--font-family-spacegrotesk) font-bold text-5xl">Proyectos Destacados</h1>
                    <span className="text-(--text-secondary) font-(family-name:--font-family-ubuntu) text-xl w-1/2">Una selección de soluciones técnicas donde el código se encuentra con el diseño de alto rendimiento.</span>
                </div>
            </Section>
        </div>
    )
}


const Section = ({ className, children }: { className: string, children: ReactNode }) => {
    return (
        <section className={`py-48 px-16 ${className}`}>
            {children}
        </section>
    )

}
export default Home;