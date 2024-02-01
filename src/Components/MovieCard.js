import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
    const { resData } = props;
    const {
        id,
        name,
        language,
        type,
        runtime,
        genres
    } = resData?.show;
    const avgRating = (resData?.score * 10).toFixed(1);

    const imgurl = resData?.show?.image?.original;

    return (
        <div className="bg-gray-200 p-4 rounded-md shadow-md mb-4 transition-transform transform hover:scale-105 h-full overflow-hidden">
            <div className="relative overflow-hidden h-48 mb-4">
                <img
                    src={imgurl}
                    alt={name}
                    className="w-full h-full object-cover transition-transform transform hover:scale-110 rounded-md"
                    style={{ objectFit: 'cover', width: '100%' }}
                />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800">{name}</h3>
            <p className="text-gray-600 mb-2">Genres: {genres.join(', ')}</p>
            <p className="text-gray-600 mb-2">Language: {language}</p>
            <p className="text-gray-600 mb-2">Rating: {avgRating}</p>
            <p className="text-gray-600 mb-2">RunTime: {runtime} Minutes</p>
            <p className="text-gray-600 mb-2">Type: {type}</p>
            <Link to={`/show/${id}`} className="text-yellow-500 hover:underline">
                <button className="bg-yellow-300 text-gray-800 py-2 px-4 rounded-md mt-2 transition-transform transform hover:scale-105">
                    View Summary
                </button>
            </Link>
        </div>
    );
};

export default MovieCard;
