import type { ReactNode } from "react";
import { Link } from 'react-router-dom';

const Button = ({ background, color, action, link, style, children }: ButtonProps) => {
    return (
        <button className={`${style === 'filled' ? `bg-(${background}) text-(${color}) border-2 hover:bg-(--bg-primary) hover:text-(--text-accent) hover:border-(--text-accent)`
         : `bg-transparent border-2 border-(${background}) text-(${background}) hover:bg-(${background}) hover:text-(--text-accent)`} 
        font-(family-name:--font-family-ubuntu) px-8 py-4 rounded-md font-bold cursor-pointer transition-all duration-300`} {...action === "href" ? <Link to={link!} /> : undefined} >
            { children }
        </button >
    )
}

export default Button;
interface ButtonProps {
    background: string;
    style: "filled" | "outlined";
    color: string;
    action?: 'href';
    link?: string;
    children: ReactNode

}