import dotenv from "dotenv";
dotenv.config();

import Admin from "../../models/adminModel";
import jwt, { Secret } from "jsonwebtoken";
import { Request, Response } from "express";

const jwtSecretKey = process.env.JWT_SECRET_KEY as Secret;

const adminLogin = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });

    if (admin && admin.password === password) {
      const token = jwt.sign({ username, role: "admin" }, jwtSecretKey, {
        expiresIn: "1h",
      });
      res.json({ message: "Logged in successfully", token });
    } else {
      res.status(403).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default adminLogin;
