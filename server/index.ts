import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
dotenv.config()
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { Request,Response,NextFunction } from 'express'
import bookRoute from "./src/routes/BookRoute"
import userRoutes from './src/routes/userRoutes'


const app = express();
const port = process.env.PORT || 3000;

const MONGODB_URI = process.env.MONGODB_URI ?? ' mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1/MyDataBase';


async function connectToDatabase(): Promise <void> {
  try {
    await mongoose.connect(MONGODB_URI, )
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}


 

connectToDatabase()
.then(() => {
app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);
app.use("/books", bookRoute);

app.use((err:any , req:Request, res:Response, next:NextFunction) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ error: "Internal Server Error", message: err.message });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

});

