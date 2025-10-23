interface SectionProps {
    id: string;
    children: React.ReactNode;
    className?: string;
    title: string;
}
const Section = ({id, children, className, title}: SectionProps) => {
    return (
        <section id={id} className={className}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}

export default Section; 
