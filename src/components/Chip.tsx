const Chip = ({ text, background, color, font, uppercase }: ChipProps) => {
    return (
        <div className={`${background} ${color} px-4 py-2 font-(family-name:${font}) ${uppercase ? 'uppercase' : ''} rounded-2xl w-fit text-xs`}>
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
}