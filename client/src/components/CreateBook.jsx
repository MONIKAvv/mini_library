import React, { useState } from "react";
import { Form, Link, Navigate, useNavigate } from "react-router-dom";
import "../index.css";
import axios from "axios";

export default function CreateBook() {
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    isbn: "",
    author: "",
    description: "",
    published_date: "",
    publisher: "",
    image: null,
    readBook: null,
  });
  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/books`, book)
      .then((res) => {
        setBook({
          title: "",
          isbn: "",
          author: "",
          description: "",
          published_date: "",
          publisher: "",
          image: null,
          readBook: null,
        });
navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col p-16">
      <div className="flex items-start">
        <Link
          to="/"
          className="text-4xl text-white p-4 font-semibold border-2
        border-gray-800 hover:drop-shadow-glow hover:bg-yellow-100 hover:text-black"
        >
          Show Book List
        </Link>
      </div>
      <div className="w-full flex justify-center">
        <div className="my-16 w-[75%]  flex flex-col justify-center bg-gray-800 rounded-xl shadow-lg p-8">
          <h1 className="text-white font-semibold text-3xl text-left">
            Add Books
          </h1>
          <hr className="mt-2"/>
          <p className="text-yellow-200 text-center my-8 text-2xl">
            Create new book
          </p>
          <Form noValidate className="w-[24rem] mx-auto" onSubmit={submit}>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                placeholder="Title of the Book"
                name="title"
                className="block  px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:border-green-950 focus:outline-none focus:ring-0 peer"
                value={book.title}
                onChange={onChange}
              />
              {showError && (
                <p className="text-red-500">Please enter title of book</p>
              )}
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                placeholder="ISBN"
                name="isbn"
                className="block  px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:border-green-950 focus:outline-none focus:ring-0 peer"
                value={book.isbn}
                onChange={onChange}
              />
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                placeholder="Author"
                name="author"
                value={book.author}
                className="block  px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:border-green-950 focus:outline-none focus:ring-0 peer"
                onChange={onChange}
              />
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                placeholder="Description"
                name="description"
                value={book.description}
                className="block  px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:border-green-950 focus:outline-none focus:ring-0 peer"
                onChange={onChange}
              />
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="date"
                placeholder="Published Date"
                name="published_date"
                value={book.published_date}
                className="block  px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:border-green-950 focus:outline-none focus:ring-0 peer"
                onChange={onChange}
              />
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                placeholder="Publlisher of the Book"
                name="publisher"
                value={book.publisher}
                className="block  px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:border-green-950 focus:outline-none focus:ring-0 peer"
                onChange={onChange}
              />
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="file"
                placeholder="Choose Image"
                name="image"
                accept="image/*"
                value={book.image}
                className="block  px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:border-green-950 focus:outline-none focus:ring-0 peer"
                onChange={onChange}
              />
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="file"
                placeholder="Upload Book"
                name="readBook"
                accept="application/pdf"
                value={book.readBook}
                className="block  px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:border-green-950 focus:outline-none focus:ring-0 peer"
                onChange={onChange}
              />
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
