 
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
const MONGODB_URI = (process.env.MONGODB_URI || 'mongodb://0.0.0.0:27017/MyDataBase').replace("::1", "127.0.0.1");
console.log(process.env.MONGODB_URI);
mongoose.connect(MONGODB_URI);
  
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to MongoDB:", err);
});

 
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
 
