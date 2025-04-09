import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="w-full max-w-sm mx-auto bg-gray-800 text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-700 p-2">
    {/* Image Section */}
    <Link to={`/show-book/${book._id}`}><img
      src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
      alt="Book Cover"
      className="w-full h-56 object-cover rounded-t-2xl"
    /> </Link>
    
  
    {/* Book Info Section */}
    <div className="p-4 flex flex-col gap-2">
      <h2 className="text-2xl font-bold hover:underline">
        <Link to={`/show-book/${book._id}`}>{book.title}</Link>
      </h2>
      <h3 className="text-lg text-gray-300 font-medium">{book.author}</h3>
      <p className="text-sm text-gray-400 line-clamp-3">
        {book.description}
      </p>
    </div>
  </div>
  
  );
}
