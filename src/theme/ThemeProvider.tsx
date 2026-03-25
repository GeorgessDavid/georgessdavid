import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from 'react';

type Theme = 'light' | 'dark';
type ThemePreference = Theme | 'system';

interface ThemeContextValue {
    theme: Theme;
    preference: ThemePreference;
    setPreference: (preference: ThemePreference) => void;
    toggleTheme: () => void;
}

const STORAGE_KEY = 'theme-preference';
const MEDIA_QUERY = '(prefers-color-scheme: dark)';

const ThemeContext = createContext<ThemeContextValue | null>(null);

const getSystemTheme = (): Theme => {
    if (typeof window === 'undefined') {
        return 'light';
    }

    return window.matchMedia(MEDIA_QUERY).matches ? 'dark' : 'light';
};

const getStoredPreference = (): ThemePreference => {
    if (typeof window === 'undefined') {
        return 'system';
    }

    const storedPreference = window.localStorage.getItem(STORAGE_KEY);

    if (storedPreference === 'light' || storedPreference === 'dark' || storedPreference === 'system') {
        return storedPreference;
    }

    return 'system';
};

const resolveTheme = (preference: ThemePreference): Theme => {
    if (preference === 'system') {
        return getSystemTheme();
    }

    return preference;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [preference, setPreference] = useState<ThemePreference>(() => getStoredPreference());
    const [theme, setTheme] = useState<Theme>(() => resolveTheme(getStoredPreference()));

    useEffect(() => {
        const mediaQuery = window.matchMedia(MEDIA_QUERY);

        const syncTheme = () => {
            setTheme(resolveTheme(preference));
        };

        syncTheme();
        mediaQuery.addEventListener('change', syncTheme);

        return () => mediaQuery.removeEventListener('change', syncTheme);
    }, [preference]);

    useEffect(() => {
        const root = document.documentElement;

        root.setAttribute('data-theme', theme);
        root.style.colorScheme = theme;
        window.localStorage.setItem(STORAGE_KEY, preference);
    }, [preference, theme]);

    const value = useMemo<ThemeContextValue>(() => ({
        theme,
        preference,
        setPreference,
        toggleTheme: () => {
            setPreference((currentPreference) => {
                const currentTheme = resolveTheme(currentPreference);
                return currentTheme === 'dark' ? 'light' : 'dark';
            });
        },
    }), [preference, theme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }

    return context;
};
