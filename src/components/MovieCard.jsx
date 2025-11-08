import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform">
      <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{movie.title}</h2>
        <p className="text-gray-600">{movie.year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
