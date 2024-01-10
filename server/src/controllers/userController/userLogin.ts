import User  from "../../models/User"
import jwt, { Secret }  from"jsonwebtoken"
import bcrypt from "bcrypt"
require("dotenv").config();
const jwtSecretKey = process.env.JWT_SECRET_KEY as Secret;
import { Request,Response } from "express";

const login = async (req:Request, res:Response) => {
  try {
    const { username, password, name } = req.body;

    if (!username || !password) {
      return res.status(401).json({ error: "Missing username or password" });
    }

    const user = await User.findOne({ username }).select("-name");

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(
        {
          username,
          role: "user",
          name,
        },
        jwtSecretKey,
        {
          expiresIn: "1h",
        }
      );
      res.json({ message: "Logged in successfully", token });
    } else {
      res.status(403).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default login

 