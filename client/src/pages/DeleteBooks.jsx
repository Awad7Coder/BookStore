import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`/api/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Deleted successfully', { variant: 'success' });
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
  <div className="min-h-screen bg-gray-950 p-8 flex flex-col items-center transition-colors duration-500">
    <BackButton />

    <h1 className="text-4xl font-semibold text-sky-400 text-center my-6 drop-shadow-md">
      Delete Book
    </h1>

    {loading && (
      <div className="flex justify-center my-4">
        <Spinner />
      </div>
    )}

    <div className="flex flex-col items-center bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-lg p-8 shadow-lg">
      <h3 className="text-2xl font-medium text-gray-300 text-center mb-6">
        Are you sure you want to delete this book?
      </h3>

      <button
        className="w-full py-3 bg-red-600 hover:bg-red-500 text-white rounded-lg font-medium text-lg shadow-md transition-colors duration-200 active:scale-[0.98]"
        onClick={handleDeleteBook}
      >
        Yes, Delete It
      </button>
    </div>
  </div>
);

}

export default DeleteBook;