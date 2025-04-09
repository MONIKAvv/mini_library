import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ShowBookDetails() {
  const [book, setBook] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const onDelete = (id) => {
    axios
      .delete(`http://localhost:8000/books/${id}`)
      .then(() => navigate("/"))
      .catch((err) => console.log("This Book can't be Deleted!", err));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          to="/"
          className="inline-block text-lg font-semibold px-4 py-2 border border-white rounded hover:bg-white hover:text-gray-900 transition duration-200"
        >
          ← Back to Book List
        </Link>
      </div>

      {/* Book Details */}
      <div className="bg-gray-800 rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 border-b pb-2 border-gray-700">
          Book Details
        </h1>

        <table className="w-full text-left table-auto border-collapse">
          <tbody>
            <TableRow label="Title" value={book.title} />
            <TableRow label="Author" value={book.author} />
            <TableRow label="ISBN" value={book.isbn} />
            <TableRow label="Publisher" value={book.publisher} />
            <TableRow label="Published Date" value={book.published_date} />
            <TableRow label="Description" value={book.description} />
          </tbody>
        </table>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={() => onDelete(book._id)}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded"
          >
            Delete Book
          </button>

          <Link
            to={`/edit-book/${book._id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
          >
            Edit Book
          </Link>
        </div>
      </div>
    </div>
  );
}

// 👇 Reusable Table Row component
function TableRow({ label, value }) {
  return (
    <tr className="border-b border-gray-700">
      <td className="py-2 pr-4 font-semibold text-gray-300">{label}</td>
      <td className="py-2 text-white">{value || "N/A"}</td>
    </tr>
  );
}
