import React from "react";
import { useParams, Link } from "react-router-dom";
import moviesData from "../data/movies.json";

const MovieDetails = () => {
  const { id } = useParams();
  const movie = moviesData.find((m) => m.id === parseInt(id));

  if (!movie) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center">
        <h2 className="text-2xl mb-4">Movie not found 😢</h2>
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="bg-gray-900 py-4 shadow-md flex justify-center">
        <Link to="/" className="text-2xl font-bold text-blue-400">
          🎬 MovieApp
        </Link>
      </nav>

      <div className="p-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-72 h-auto rounded-lg shadow-lg hover:shadow-blue-500/30 transition"
        />
        <div className="max-w-lg">
          <h1 className="text-3xl font-bold mb-3">{movie.title}</h1>
          <p className="text-gray-400 mb-2">Year: {movie.year}</p>
          <p className="text-yellow-400 mb-4">⭐ {movie.rating}</p>
          <p className="text-gray-300 leading-relaxed mb-6">
            {movie.description ||
              "No description available for this movie. Coming soon!"}
          </p>

          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
          >
            ← Back to Movies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
