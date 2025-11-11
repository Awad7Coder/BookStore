import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

return (
  <div className="border border-sky-700 bg-linear-to-b from-gray-900 to-gray-800 rounded-2xl px-4 py-3 m-4 relative shadow-md hover:shadow-sky-600/20 transition-all duration-300">
    {/* Publish Year Badge */}
    <h2 className="absolute top-2 right-1 px-3 py-1 bg-sky-700 text-white text-sm font-medium rounded-full shadow-md">
      {book.publishYear}
    </h2>

  

    {/* Title */}
    <div className="flex justify-start items-center gap-x-2">
      <PiBookOpenTextLight className="text-sky-400 text-2xl" />
      <h2 className="my-1 text-lg text-white font-semibold">{book.title}</h2>
    </div>

    {/* Author */}
    <div className="flex justify-start items-center gap-x-2">
      <BiUserCircle className="text-sky-400 text-2xl" />
      <h2 className="my-1 text-gray-300">{book.author}</h2>
    </div>

    {/* Icons */}
    <div className="flex justify-between items-center gap-x-3 mt-4 p-3 bg-gray-900 rounded-xl shadow-inner">
      <BiShow
        className="text-3xl text-sky-400 hover:text-sky-300 cursor-pointer transition-colors"
        onClick={() => setShowModal(true)}
      />
      <Link to={`/books/details/${book._id}`}>
        <BsInfoCircle className="text-2xl text-green-500 hover:text-green-400 transition-colors" />
      </Link>
      <Link to={`/books/edit/${book._id}`}>
        <AiOutlineEdit className="text-2xl text-yellow-400 hover:text-yellow-300 transition-colors" />
      </Link>
      <Link to={`/books/delete/${book._id}`}>
        <MdOutlineDelete className="text-2xl text-red-500 hover:text-red-400 transition-colors" />
      </Link>
    </div>

    {/* Modal */}
    {showModal && <BookModal book={book} onClose={() => setShowModal(false)} />}
  </div>
);

};

export default BookSingleCard;