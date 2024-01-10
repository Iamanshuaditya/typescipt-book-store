import BookModel from "../../models/BookModel"
import { Request,Response } from "express";

const SearchBook = async (req:Request, res:Response) => {
  try {
    const param = req.query.param;

    const result = await BookModel.find({
      $or: [
        { Title: { $regex: param, $options: "i" } },
        { ISBN: { $regex: param, $options: "i" } },
        { Authors: { $regex: param, $options: "i" } },
        { categories: { $regex: param, $options: "i" } },
      ],
    });
    res.status(200).json(result);
  } catch (error: any) {
    console.log(error.message);
    res.json({ message: error });
  }
};
 


export default SearchBook