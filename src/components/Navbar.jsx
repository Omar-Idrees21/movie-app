import React from "react";

const Navbar = ({ onSearch }) => {
  return (
    <nav className="bg-blue-600 text-white flex justify-between items-center px-6 py-3 shadow-md">
      <h1 className="text-2xl font-bold">🎬 MovieApp</h1>
      <input
        type="text"
        placeholder="Search movies..."
        onChange={(e) => onSearch(e.target.value)}
        className="px-3 py-1 rounded text-black outline-none"
      />
    </nav>
  );
};

export default Navbar;
