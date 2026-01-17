import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post('/api/books', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

return (
  <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-100 p-8">
    <div className="max-w-2xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl rounded-2xl p-8 border border-gray-700 backdrop-blur-lg">
      <BackButton />

      <h1 className="text-4xl font-semibold text-sky-400 text-center mb-8 tracking-wide">
        Create New Book
      </h1>

      {loading && (
        <div className="flex justify-center my-4">
          <Spinner />
        </div>
      )}

      <div className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-lg font-medium text-gray-300 mb-2">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter book title..."
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none transition duration-200"
          />
        </div>

        {/* Author */}
        <div>
          <label className="block text-lg font-medium text-gray-300 mb-2">
            Author
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author's name..."
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none transition duration-200"
          />
        </div>

        {/* Publish Year */}
        <div>
          <label className="block text-lg font-medium text-gray-300 mb-2">
            Publish Year
          </label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            placeholder="e.g., 2025"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none transition duration-200"
          />
        </div>

        {/* Save Button */}
        <button
          onClick={handleSaveBook}
          className="w-full py-3 bg-sky-600 text-white rounded-lg font-medium text-lg shadow-lg hover:bg-sky-500 active:scale-[0.98] transition-all duration-150"
        >
          💾 Save Book
        </button>
      </div>
    </div>
  </div>
);


}

export default CreateBooks