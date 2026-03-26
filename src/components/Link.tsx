import type { ReactNode } from "react";

interface LinkProps {
    href: string;
    target?: '_blank';
    className?: string;
    id?: string;
    children?: ReactNode;
}

export const Link = ({href, target, className, id, children}: LinkProps) => {
    return (
        <a href={href} target={target} className={className} id={id}>
            {children}
        </a> 
    )
}