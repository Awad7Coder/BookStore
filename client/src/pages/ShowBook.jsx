import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

return (
  <div className="min-h-screen bg-linear-to-b from-gray-900 via-gray-950 to-black text-gray-100 p-8">
    <div className="max-w-3xl mx-auto bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-2xl p-8">
      <BackButton />

      <h1 className="text-4xl font-semibold text-sky-400 text-center mb-8 tracking-wide">
        Book Details
      </h1>

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <Spinner />
        </div>
      ) : (
        <div className="space-y-6">
          {/* ID */}
          <div className="flex justify-between border-b border-gray-700 pb-3">
            <span className="text-lg text-gray-400 font-medium">ID</span>
            <span className="font-mono text-sky-300 break-all">{book._id}</span>
          </div>

          {/* Title */}
          <div className="flex justify-between border-b border-gray-700 pb-3">
            <span className="text-lg text-gray-400 font-medium">Title</span>
            <span className="text-lg text-gray-100">{book.title}</span>
          </div>

          {/* Author */}
          <div className="flex justify-between border-b border-gray-700 pb-3">
            <span className="text-lg text-gray-400 font-medium">Author</span>
            <span className="text-lg text-gray-100">{book.author}</span>
          </div>

          {/* Publish Year */}
          <div className="flex justify-between border-b border-gray-700 pb-3">
            <span className="text-lg text-gray-400 font-medium">
              Publish Year
            </span>
            <span className="text-lg text-gray-100">{book.publishYear}</span>
          </div>

          {/* Created At */}
          <div className="flex justify-between border-b border-gray-700 pb-3">
            <span className="text-lg text-gray-400 font-medium">
              Created At
            </span>
            <span className="text-sm text-gray-300">
              {new Date(book.createdAt).toLocaleString()}
            </span>
          </div>

          {/* Updated At */}
          <div className="flex justify-between">
            <span className="text-lg text-gray-400 font-medium">
              Last Updated
            </span>
            <span className="text-sm text-gray-300">
              {new Date(book.updatedAt).toLocaleString()}
            </span>
          </div>
        </div>
      )}
    </div>
  </div>
);

};

export default ShowBook;