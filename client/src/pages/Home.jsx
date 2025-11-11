import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5000/api/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

return (
  <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-100 p-6">
    <div className="max-w-6xl mx-auto">
      {/* View Mode Buttons */}
      <div className="flex justify-center items-center gap-4 mb-6">
        <button
          className={`px-5 py-2 rounded-lg font-medium transition-all duration-200 ${
            showType === "table"
              ? "bg-sky-600 text-white shadow-md scale-105"
              : "bg-gray-800 text-gray-300 hover:bg-sky-700 hover:text-white"
          }`}
          onClick={() => setShowType("table")}
        >
          📋 Table View
        </button>
        <button
          className={`px-5 py-2 rounded-lg font-medium transition-all duration-200 ${
            showType === "card"
              ? "bg-sky-600 text-white shadow-md scale-105"
              : "bg-gray-800 text-gray-300 hover:bg-sky-700 hover:text-white"
          }`}
          onClick={() => setShowType("card")}
        >
          🗂️ Card View
        </button>
      </div>

      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-semibold text-sky-400 tracking-wide">
          Books Library
        </h1>
        <Link
          to="/books/create"
          className="flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-200"
        >
          <MdOutlineAddBox className="text-2xl" />
          <span className="font-medium">Add Book</span>
        </Link>
      </div>

      {/* Content Section */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-xl backdrop-blur-lg">
        {loading ? (
          <div className="flex justify-center items-center py-10">
            <Spinner />
          </div>
        ) : showType === "table" ? (
          <BooksTable books={books} />
        ) : (
          <BooksCard books={books} />
        )}
      </div>
    </div>
  </div>
);

};

export default Home;