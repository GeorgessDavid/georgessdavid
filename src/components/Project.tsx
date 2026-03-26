import type { ReactNode } from "react";
// import Chip from "./Chip";
// import type { ChipProps } from './Chip';

interface ProjectProps {
    img?: string;
    img_classes?: string;
    title: string;
    description: string;
    link?: ReactNode;
    size: string;
    img_alt?: string;
    bgOpacity: string
    // chip_props?: ChipProps
    children: ReactNode
}

const Project = ({img, img_classes, img_alt, title, description, link, size, children, bgOpacity}: ProjectProps) => {
    return (
        <div className={`${size} relative group overflow-hidden`}>
           <img src={img} className={`${img_classes} w-full h-[400px] object-cover opacity-${bgOpacity} group-hover:scale-105 transition-transform duration-700`} alt={img_alt} />
           <div className='absolute inset-0 bg-linear-to-t from-background via-transparent to transparent' />
           <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex gap-2 mb-4">
                    {children}
                </div>
                <h2 className="font-bold text-3xl font-(family-name:--font-family-ubuntu) my-4">{title}</h2>
                <div className='mb-8'>
                    <span className="text-xl text-(--text-secondary)/80">{description}</span>
                </div>
                {link}
            </div> 
        </div>
    )
}

export default Project;