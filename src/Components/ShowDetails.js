// ShowDetails.jsx

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ShowDetails = () => {
    const { showId } = useParams();
    const [show, setShow] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.tvmaze.com/shows/${showId}`);
            const data = await response.json();
            setShow(data);
        } catch (error) {
            console.error('Error fetching show details:', error);
        }
    };

    return (
        <div className="container mx-auto mt-8">
            {show ? (
                <div className="max-w-2xl mx-auto bg-white p-8 rounded-md shadow-md">
                    <h2 className="text-3xl font-bold mb-4">{show.name}</h2>
                    <div className="mb-4">
                        <img
                            src={show.image && show.image.original}
                            alt={show.name}
                            className="w-full h-auto rounded-md"
                            style={{ maxHeight: '300px', objectFit: 'cover' }}
                        />
                    </div>
                    <div className="mb-8">
                        <p className="text-gray-700 font-semibold">Summary:</p>
                        <div
                            dangerouslySetInnerHTML={{ __html: show.summary }}
                            className="text-gray-700"
                        />
                    </div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                            Book Ticket
                        </button>
                    <Link to="/" className="block    text-blue-500 mt-4 hover:underline">
                        Back to All Shows
                    </Link>
                </div>
            ) : (
                <p className="text-center">Loading...</p>
            )}
        </div>
    );
};

export default ShowDetails;
