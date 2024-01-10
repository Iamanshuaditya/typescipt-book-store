import User from "../../models/User"
import { Request,Response } from "express";
const me = async (req:Request, res:Response) => {
  try {
    const username = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ msg: "No such user found" });
    }
    const { name } = user;
    res.json({ name });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


export default me
 