import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

const Body = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
            const data = await response.json();
            setShows(data);
        } catch (error) {
            console.error('Error fetching shows:', error);
        }
    };

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">Explore Popular Shows</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {shows?.map((res) => (
                    <MovieCard key={res.show.id} resData={res} />
                ))}
            </div>
        </div>
    );
};

export default Body;