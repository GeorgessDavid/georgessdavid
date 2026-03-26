const Chip = ({ text, background, color, font, uppercase, className }: ChipProps) => {
    return (
        <div className={`${background} ${color} px-4 py-2 font-(family-name:${font}) ${uppercase ? 'uppercase' : ''} rounded-md w-fit text-xs ${className ? className : ''}`}>
            {text}
        </div>
    )
}


export default Chip;

interface ChipProps {
    text: string;
    background: string;
    color: string;
    font: string;
    uppercase: boolean;
    className?: string;
}