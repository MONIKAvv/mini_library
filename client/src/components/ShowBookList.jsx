import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ShowBookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/books`)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const bookList =
    books.length === 0
      ? "There is no Book Record!"
      : books.map((book, e) => <BookCard book={book} key={e} />);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      {/* Add Book Button */}
      <div className="mb-8">
        <Link
          to="/create-book"
          className="inline-block text-lg font-semibold px-6 py-3 border border-white rounded hover:bg-white hover:text-gray-900 transition duration-200"
        >
          + Add More Books
        </Link>
      </div>

      {/* Book List */}
      <div className="flex flex-wrap gap-6">
        {bookList}
      </div>
    </div>
  );
}
