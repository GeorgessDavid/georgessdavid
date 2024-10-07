import { useState, useEffect } from 'react';

export const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api-georgesdavid.vercel.app/projects')
            .then(response => response.json())
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(error => console.error(error));
    }, []);

    return { projects, loading };
}