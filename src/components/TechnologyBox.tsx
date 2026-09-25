import { Star } from '@mui/icons-material';

interface TechnologyProps {
    name: string;
    logoPath: string;
    main: boolean
}

export const TechnologyBox = ({name, logoPath, main}: TechnologyProps) => {
    return (
        <div className="bg-(--bg-surface-high) py-8 px-12 rounded-lg w-80 transition-all duration-300 hover:bg-(--bg-surface-middle) flex flex-col items-center justify-center gap-4 relative">
            {main && <div className="bg-(--bg-accent) rounded-full absolute -top-2 right-2 flex items-center justify-center p-2"><Star /></div>}
            <img srcSet={logoPath} width={1920} height={1080} className="w-1/4"/>
            <h3 className="text-xl font-bold font-(family-name:--font-family-ubuntu)!">{name}</h3>
            {/* <span>{main ? 'main' : 'nomain'}</span> */}
        </div>
    )
}