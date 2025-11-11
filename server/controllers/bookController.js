import catchAsync from "../middlewares/asyncweaper.js";
import AppError from "../utilities/appError.js";
import { Book } from "../models/bookModels.js";

export const getBook = catchAsync(async (req, res, next) => {
  const book = await Book.find({});
  return res.status(201).json({ count: book.length, data: book });
});

export const getOneBook = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const book = await Book.findById(id);
  if (!book) {
    return next(AppError.create("Book not found!!", 404, "fail"));
  }
  return res.status(201).json(book);
});

export const createBook = catchAsync(async (req, res, next) => {
  const { title, author, publishYear } = req.body;

  if (!title || !author || !publishYear) {
    return next(AppError.create("All fields are required", 400, "fail"));
  }
  const bookData = { title, author, publishYear };

  const book = await Book.create(bookData);

  return res.status(201).json({
    status: "success",
    data: { book },
  });
});

export const updateBook = catchAsync(async (req, res, next) => {
  const { title, author, publishYear } = req.body;

  if (!title || !author || !publishYear) {
    return next(AppError.create("All fields are required", 400, "fail"));
  }

  const { id } = req.params;

  const result = await Book.findByIdAndUpdate(
    id,
    { title, author, publishYear },
    { new: true, runValidators: true }
  );

  if (!result) {
    return next(AppError.create("Book not found!!", 404, "fail"));
  }

  return res.status(200).json({
    status: "success",
    message: "Book updated successfully",
    data: { book: result },
  });
});

export const deleteBook = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const result = await Book.findByIdAndDelete(id);

  if (!result) {
    return next(AppError.create("Book not found!!", 404, "fail"));
  }

  return res.status(201).json({
    status: "success",
    message: "Book deleted successfully ",
  });
});
