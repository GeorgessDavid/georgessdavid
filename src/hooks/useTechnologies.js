import { useState, useEffect } from 'react';

export const useTechnologies = () => {
    const [technologies, setTechnologies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api-georgesdavid.vercel.app/technologies')
            .then(response => response.json())
            .then(data => {
                setTechnologies(data);
                setLoading(false);
            })
            .catch(error => console.error(error));
    }, []);

    return { technologies, loading };
}