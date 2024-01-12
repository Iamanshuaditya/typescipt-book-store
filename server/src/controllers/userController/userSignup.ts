import User  from "../../models/User"
import jwt, { Secret } from  "jsonwebtoken"
import bcrypt from  "bcrypt"
require("dotenv").config();
const jwtSecretKey = process.env.JWT_SECRET_KEY as Secret;
import { Response,Request } from "express";
const signup = async (req: Request, res: Response) => {
  console.log("Received signup request");
  try {
    const { name, username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(403).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, username, password: hashedPassword });

    await newUser.save();

    const token = jwt.sign({ username, role: "user", name }, jwtSecretKey, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default signup

 