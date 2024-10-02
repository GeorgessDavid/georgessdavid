import { useState, useEffect } from 'react';

export const useTechnologies = () => {
    const [technologies, setTechnologies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3008/technologies')
            .then(response => response.json())
            .then(data => {
                setTechnologies(data);
                setLoading(false);
            })
            .catch(error => console.error(error));
    }, []);

    return { technologies, loading };
}