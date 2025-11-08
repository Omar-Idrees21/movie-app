import React, { useState, useEffect } from "react";
import moviesData from "../data/movies.json";
import { Link } from "react-router-dom";


const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(moviesData);
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navbar */}
      <nav className="bg-gray-900 py-4 shadow-md flex justify-center">
        <h1 className="text-2xl font-bold text-blue-400">🎬 MovieApp</h1>
      </nav>

      {/* Search Bar */}
      <div className="p-6 flex justify-center">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-96 p-3 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Movies Grid */}
      <main className="p-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie, index) => (
            <div
              key={movie.id}
              style={{
                animation: `fadeIn 0.6s ease ${index * 0.15}s forwards`,
                opacity: 0,
                transform: "scale(0.95)",
              }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/40 hover:border-blue-500 border border-transparent hover:scale-105 transform transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-64 object-cover opacity-90 hover:opacity-100 transition duration-300"
                />
                <span className="absolute top-2 left-2 bg-blue-500 text-xs font-semibold px-2 py-1 rounded-md">
                  {movie.year}
                </span>
              </div>

              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold mb-1 text-white">
                  {movie.title}
                </h2>
                <p className="text-yellow-400 font-semibold mb-2">
                  ⭐ {movie.rating}
                </p>
                <Link
                  to={`/movie/${movie.id}`}
                 className="inline-block bg-blue-600 hover:bg-blue-700 text-sm text-white px-4 py-2 rounded-lg transition duration-300">
                View Details
                </Link>

              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center col-span-full">
            No movies found.
          </p>
        )}
      </main>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
