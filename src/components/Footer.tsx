import { Link } from '../components';

const Footer = () => {
    return (
        <footer className="w-full bg-(--bg-surface-low) w-full py-12 px-8">
            <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
                <div className="flex flex-col">
                    <span className="text-lg font-bold text-(--text-primary) font-(family-name:--font-family-ubuntu)">GEORGES DAVID</span>
                    <span className="text-(--text-muted) font-(family-name:--font-family-inter)">Desarrollador Web Full Stack</span>
                </div>
                <div className="flex gap-8" >
                    <Link href='https://github.com/georgessdavid' target='_blank' className="text-xs font-(family-name:--font-family-inter) tracking-widest uppercase text-(--text-muted) hover:text-(--text-primary) transition-colors duration-200 opacity-100 hover:opacity-70 font-bold">GITHUB</Link>
                    <Link href='https://linkedin.com/in/georgessdavid' target='_blank' className="text-xs font-(family-name:--font-family-inter) tracking-widest uppercase text-(--text-muted) hover:text-(--text-primary) transition-colors duration-200 opacity-100 hover:opacity-70 font-bold">LINKEDIN</Link>
                    <Link href='https://wa.me/5491138965913' target='_blank' className="text-xs font-(family-name:--font-family-inter) tracking-widest uppercase text-(--text-muted) hover:text-(--text-primary) transition-colors duration-200 opacity-100 hover:opacity-70 font-bold">WhatsApp</Link>
                    <Link href='mailto:georgesdavid.dev@gmail.com' target='_blank' className="text-xs font-(family-name:--font-family-inter) tracking-widest uppercase text-(--text-muted) hover:text-(--text-primary) transition-colors duration-200 opacity-100 hover:opacity-70 font-bold">Email</Link>
                </div>
            </div>
        </footer>
    )
}
export default Footer;