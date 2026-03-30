export const ReactLogo = () => {
    return (
        <svg
            fill="none"
            height="50"
            viewBox="0 0 300 300"
            width="50"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: 'var(--text-accent)' }}
        >
            <rect fill="currentColor" height="300" rx="50" width="300" />
            <circle cx="150" cy="150" r="30" fill="none" stroke="#FFFFFF" strokeWidth="4" />
            <circle cx="150" cy="80" r="8" fill="#FFFFFF" />
            <circle cx="213.73" cy="180" r="8" fill="#FFFFFF" />
            <circle cx="86.27" cy="180" r="8" fill="#FFFFFF" />
            <ellipse cx="150" cy="150" rx="70" ry="25" fill="none" stroke="#FFFFFF" strokeWidth="4" />
            <ellipse
                cx="150"
                cy="150"
                rx="70"
                ry="25"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                transform="rotate(60 150 150)"
            />
            <ellipse
                cx="150"
                cy="150"
                rx="70"
                ry="25"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                transform="rotate(120 150 150)"
            />
        </svg>
    )
}
