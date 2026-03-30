import { Chip, Button, Link, Project, SkillBox } from '../components';
import type { ReactNode } from 'react';
import EastIcon from '@mui/icons-material/East';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { TSLogo, NextJSLogo, MySQLLogo } from '../logos';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import { TextField } from '@mui/material';
import { PlaceOutlined, EmailOutlined } from '@mui/icons-material';

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
            <Section className="bg-(--bg-surface-middle) w-full py-24 justify-around" id="projects">
                <h2 className="text-(--text-secondary) font-(family-name:--font-family-spacegrotesk) uppercase font-bold">Portfolio</h2>
                <div className="flex w-full justify-between items-center mb-12">
                    <h1 className="text-(--text-primary) font-(family-name:--font-family-spacegrotesk) font-bold text-5xl">Proyectos Destacados</h1>
                    <span className="text-(--text-secondary) font-(family-name:--font-family-ubuntu) text-xl w-1/3">Una selección de soluciones técnicas donde el código se encuentra con el diseño de alto rendimiento.</span>
                </div>
                <div className="flex gap-8 w-full justify-between flex-wrap">
                    <Project
                        size="w-5xl"
                        img="cmd_app_img.png"
                        img_alt="cmd_app_img.png"
                        bgOpacity="50"
                        title="CMD App"
                        description="Sistema de gestión de pacientes, historias clínicas y reportes clínicos online."
                        link={<Link href="https://app.consultoriosmedicosdavid.com.ar" target="_blank" className="text-(--text-secondary) flex gap-2 items-center text-2xl font-bold font-(family-name:--font-family-ubuntu) hover:gap-4 transition-all duration-300">Explorar el sitio <ArrowOutwardIcon /></Link>}
                    >
                        <Chip background='bg-(--bg-primary)' color='text-(--bg-primary)' font='font-(family-name:--font-family-ubuntu)' text='Next.js' uppercase={false} className='bg-(--bg-primary)/20 text-xl font-bold' />
                        <Chip background='bg-(--bg-primary)' color='text-(--bg-primary)' font='font-(family-name:--font-family-ubuntu)' text='TypeScript' uppercase={false} className='bg-(--bg-primary)/20 text-xl font-bold' />
                    </Project>
                    <Project
                        size="w-2xl"
                        bgOpacity="40"
                        img="fincas_aconcagua_img.png"
                        img_alt="cmd_app_img.png"
                        title="Fincas de Aconcagua"
                        description="Sitio web oficial de un proyecto inmobiliario en la zona de Ing. Maschwitz."
                        link={<Link href="https://www.fincasdeaconcagua.com.ar" target="_blank" className="text-(--text-secondary) text-2xl font-bold flex gap-2 items-center font-(family-name:--font-family-ubuntu) hover:gap-4 transition-all duration-300">Ir al sitio <ArrowOutwardIcon /></Link>}
                    >
                        <Chip background='bg-(--text-tertiary)' color='text-(--text-tertiary)' font='font-(family-name:--font-family-ubuntu)' text='React.js' uppercase={false} className='bg-(--text-tertiary)/20 text-xl font-bold' />
                    </Project>
                    <Project
                        size="w-xl"
                        bgOpacity='40'
                        img='cmd_web_img.png'
                        img_alt='cmd_web_img.png'
                        title='Consultorios Médicos David'
                        description="Sitio web oficial de los Consultorios Médicos David"
                        link={<Link href="https://www.consultoriosmedicosdavid.com.ar" target="_blank" className="text-(--text-secondary) text-2xl font-bold font-(family-name:--font-family-ubuntu) hover:gap-4 transition-all duration-300"><InsertLinkIcon /></Link>}
                    >
                        <Chip background='bg-(--text-secondary)' color='text-(--text-secondary)' font='font-(family-name:--font-family-inter' text='React.js' uppercase={false} className='bg-(--text-secondary)/20 text-xl font-bold' />
                    </Project>
                    <div className="w-6xl group relative overflow-hidden bg-surface-container-high rounded-xl h-[300px]">
                        <div className="absolute inset-0 bg-linear-to-r from-(--gradient-accent-to)/20 to-transparent" />
                        <div className="relative h-full p-12 flex flex-col justify-center">
                            <h3 className="text-4xl font-(family-name:--font-family-spacegrotesk) font-bold">¿Tenés una buena idea?</h3>
                            <p className="text-on-surface-variant max-w-md mb-6">Estoy listo para ayudarte a convertir tus conceptos técnicos en productos digitales de impacto global.</p>
                            <div>
                                <Link href='#contact' className='inline-block bg-white text-(--bg-primary) px-8 py-3 font-bold rounded-lg hover:bg-(--bg-primary) hover:text-(--text-secondary) transition-all duration-300'>Empecemos a trabajar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Section className="px-8 md:px-24" id="skills">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-headline font-bold mb-20">Habilidades Técnicas</h2>
                    <div className="flex items-center justify-around gap-8">
                        <SkillBox logo={<TSLogo />} title="TypeScript" />
                        <SkillBox logo={<NextJSLogo />} title="Next.js" />
                        <SkillBox logo={<CloudQueueIcon className="text-(--text-accent)" fontSize='large' />} title="AWS" />
                        <SkillBox logo={<MySQLLogo className="text-(--text-tertiary)" />} title="MySQL" />
                        <SkillBox logo={<AccountTreeIcon className="text-(--text-accent)" fontSize='large' />} title="Git" />
                    </div>
                </div>
            </Section>
            <Section className="px-8 md:px24 bg-(--bg-input)" id="aboutMe">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items center gap-20">
                    <div className="w-full lg:w-1/2 relative">
                        <div className="absolute -top-4 -left-4 w-full h-full border-2 border-(--text-accent) z-0 rounded-full" />
                        <img src="profile.jpeg" className="relative z-10 w-full aspect-square rounded-full object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" alt="profile.jpeg" />
                    </div>
                    <div className="w-full lg:w-1/2 space-y-8">
                        <h2 className="font-label uppercase tracking-widest text-sm text-(--text-secondary) font-(family-name:--font-family-spacegrotesk) font-bold">Sobre Mí</h2>
                        <h3 className="text-4xl md:text-5xl font-(family-name:--font-family-space-grotesk) font-bold">Más de 2 años creando sistemas reales y escalables.</h3>
                        <p className="text-(--text-secondary) text-lg leading-relaxed">
                            Mi enfoque combina desarrollo práctico con pensamiento orientado a producto. Me especializo en arquitecturas backend con TypeScript, diseño de sistemas escalables y desarrollo de aplicaciones web con Next.js.
                            <br />
                            <br />
                            He desarrollado soluciones en producción para entornos reales, optimizando procesos, mejorando la gestión de datos y construyendo experiencias eficientes para usuarios y equipos de trabajo.
                        </p>
                        <div className="grid grid-cols-2 gap-8 pt-4">
                            <div>
                                <div className="text-3xl font-bold text-(--text-secondary)">5+</div>
                                <div className="text-sm uppercase tracking widest text-(--text-secondary)">Sistemas en producción</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-(--text-secondary)">TypeScript / Next.js</div>
                                <div className="text-sm uppercase tracking widest text-(--text-secondary)">Stack principal</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Section className="px-8 md:px-24" id="contact">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-5xl font-(family-name:--font-family-spacegrotesk font-bold mb-8">Hablemos de tu próximo proyecto</h2>
                            <p className="text-(--text-secondary) text-lg mb-12">
                                ¿Buscas un socio tecnológico o simplemente querés saludar? Mi bandeja de entrada siempre está abierta.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-(--bg-surface) flex items-center justify-center text-(--text-secondary)">
                                        <EmailOutlined />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-(--text-secondary)">Email</p>
                                        <p className="font-bold">georgesdavid.dev@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-(--bg-surface) flex items-center justify-center text-(--text-secondary)">
                                        <PlaceOutlined />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-(--text-secondary)">Ubicación</p>
                                        <p className="font-bold">Buenos Aires, Argentina</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-(--bg-surface-middle) p-10 rounded-2xl">
                            <form>
                                <div className="flex flex-col gap-8">
                                    <TextField label="Nombre" placeholder="Tu nombre" variant="filled" fullWidth color='primary' />
                                    <TextField label="Email" placeholder="example@example.com" type="email" variant="filled" fullWidth />
                                    <TextField label="Mensaje" placeholder="Cuéntame sobre tu proyecto..." multiline rows={4} variant="filled" fullWidth />
                                    <button className="w-48 bg-(--bg-accent) text-(--text-inverse) font-bold py-3 px-6 cursor-pointer rounded-lg hover:bg-(--bg-accent-soft) transition-colors">
                                        Enviar Mensaje
                                    </button>
                                </div>
                            </form>
                        </div>
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