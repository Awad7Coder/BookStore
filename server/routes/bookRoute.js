import express from "express";
import { createBook , getBook ,getOneBook , updateBook, deleteBook} from '../controllers/bookController.js';
const router = express.Router();

 router.post("/books",createBook)
 router.get("/books",getBook)
 router.get("/books/:id",getOneBook)
 router.put("/books/:id",updateBook)
 router.put("/books/:id",updateBook)
 router.delete("/books/:id",deleteBook)

 export default router;