import express from 'express'
const router = express.Router();
import getBooks from "../controllers/BooksController/BookController";
import { Request,Response,NextFunction } from "express";

router.get("/book", async (req:Request, res:Response, next:NextFunction) => {
  try {
    const books = await getBooks();
    res.json(books);
  } catch (error) {
    next(error);
  }
});

export default router
