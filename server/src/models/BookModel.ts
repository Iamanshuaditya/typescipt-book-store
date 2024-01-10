import mongoose from "mongoose"

const BookSchema = new mongoose.Schema({
  Title: String,
  ISBN: String,
  pagecount: Number,
  publisheddate: Date,
  "Image-URL-L": String,
  shortdescription: String,
  longdescription: String,
  status: String,
  Authors: Array,
  categories: Array,
});

const BookModel = mongoose.model("Book", BookSchema);

export default BookModel
// there is no such things as findAll in mongodb