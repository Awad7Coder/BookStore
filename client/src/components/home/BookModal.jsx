import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
return (
  <div
    className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center transition-opacity duration-300"
    onClick={onClose}
  >
    <div
      onClick={(event) => event.stopPropagation()}
      className="w-[600px] max-w-full h-[450px] bg-gray-900 rounded-2xl p-6 flex flex-col relative shadow-xl"
    >
      {/* Close Button */}
      <AiOutlineClose
        className="absolute right-6 top-6 text-3xl text-red-500 hover:text-red-400 cursor-pointer transition-colors"
        onClick={onClose}
      />

      {/* Publish Year Badge */}
      <h2 className="w-fit px-4 py-1 bg-sky-600 text-white rounded-full shadow-md mb-3">
        {book.publishYear}
      </h2>

      {/* Book ID */}
      <h4 className="my-2 text-gray-400 text-sm">{book._id}</h4>

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

      {/* Description */}
      <div className="mt-4 overflow-y-auto text-gray-300">
        <p className="mb-2 font-medium text-white">Description:</p>
        <p className="text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
          voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
          necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
          nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
          dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
          vitae voluptate sequi repellat!
        </p>
      </div>
    </div>
  </div>
);

};

export default BookModal;