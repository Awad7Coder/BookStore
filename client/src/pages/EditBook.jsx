import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:5000/api/books/${id}`);
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
      } catch (error) {
        console.log(error);
        enqueueSnackbar("Failed to fetch book", { variant: "error" });
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear: Number(publishYear),
    };
    setLoading(true);
    axios
      .put(`http://localhost:5000/api/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Edited successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-gray-950 to-black text-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-2xl p-8">
        <BackButton />

        <h1 className="text-4xl font-semibold text-sky-400 text-center mb-8 tracking-wide">
          Edit Book
        </h1>

        {loading ? (
          <div className="flex justify-center my-6">
            <Spinner />
          </div>
        ) : (
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-lg font-medium text-gray-400 mb-2">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter book title..."
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500 focus:outline-none transition duration-200"
              />
            </div>

            {/* Author */}
            <div>
              <label className="block text-lg font-medium text-gray-400 mb-2">
                Author
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Enter author name..."
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500 focus:outline-none transition duration-200"
              />
            </div>

            {/* Publish Year */}
            <div>
              <label className="block text-lg font-medium text-gray-400 mb-2">
                Publish Year
              </label>
              <input
                type="number"
                value={publishYear}
                onChange={(e) => setPublishYear(e.target.value)}
                placeholder="e.g., 2025"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500 focus:outline-none transition duration-200"
              />
            </div>

            {/* Save Button */}
            <button
              onClick={handleEditBook}
              className="w-full py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-medium text-lg shadow-md active:scale-[0.98] transition-transform duration-150"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditBook;
