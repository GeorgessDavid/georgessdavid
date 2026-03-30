import type { ReactNode } from "react"

interface SkillBoxProps {
    logo: ReactNode | string;
    title: string;
}

const SkillBox = ({ logo, title }: SkillBoxProps) => {
    return (
        <div className="flex flex-col items-center gap-4 p-8 bg-(--bg-surface) rounded-xl hover:bg-(--bg-surface-high) transition-colors group w-xl">
            {logo}
            <span className="font-bold font-(family-name:--font-family-ubuntu) tracking-wide">{title}</span>
        </div>
    )
}

export default SkillBox;