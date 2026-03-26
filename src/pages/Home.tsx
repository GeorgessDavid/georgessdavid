import { Chip, Button } from '../components';
import type { ReactNode } from 'react';
import EastIcon from '@mui/icons-material/East';
const Home = () => {
    return (
        <div className="w-full">
            <Section className="flex flex-col bg-(--bg-primary) gap-4" id="home">
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
            <Section className="bg-(--bg-surface-middle) w-full py-24" id="projects">
                <h2 className="text-(--text-secondary) font-(family-name:--font-family-spacegrotesk) uppercase font-bold">Portfolio</h2>
                <div className="flex w-full justify-between items-center">
                    <h1 className="text-(--text-primary) font-(family-name:--font-family-spacegrotesk) font-bold text-5xl">Proyectos Destacados</h1>
                    <span className="text-(--text-secondary) font-(family-name:--font-family-ubuntu) text-xl w-1/3">Una selección de soluciones técnicas donde el código se encuentra con el diseño de alto rendimiento.</span>
                </div>
                <div className="flex gap-8 w-full">
                    <div className="w-4xl relative">
                        <div className="bg-(--bg-primary) w-full h-full absolute z-10 opacity-70 backdrop-blur-lg"></div>
                        <div className="absolute z-20 m-8 bottom-0">
                            <div className="flex gap-4 ">
                                <Chip background='bg-(--text-secondary)' color='text-(--text-secondary)' font='font-(family-name:--font-family-ubuntu)' text='Next.js' uppercase={false} className='bg-(--text-secondary)/20 font-bold' />
                                <Chip background='bg-(--text-secondary)' color='text-(--text-accent)' font='font-(family-name:--font-family-ubuntu)' text='TypeScript' uppercase={false} className='backdrop-opacity-25 font-bold' />
                            </div>
                            <h2 className="font-bold text-3xl font-(family-name:--font-family-ubuntu) my-4">CMD App</h2>
                            <span className="text-xl text-(--text-secondary)">Sistema de gestión de pacientes, historias clínicas y reportes clínicos online.</span>
                        </div>
                        <img src='cmd_app_img.png' className="w-4xl hover:scale-105 transition-all duration-300" />
                    </div>
                </div>
            </Section>
        </div>
    )
}


const Section = ({ className, children, id }: { className: string, children: ReactNode, id?: string }) => {
    return (
        <section className={`py-48 px-16 ${className}`} id={id}>
            {children}
        </section>
    )

}
export default Home;