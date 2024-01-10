import BookModel from "../../models/BookModel";
 

  const getBooks = async () => {
  try {
    const books = await BookModel.find();
    return books;
  } catch (error) {
    console.error("Error retrieving books:", error);
    throw error;
  }
};

export default getBooks