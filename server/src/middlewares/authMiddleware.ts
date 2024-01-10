import jwt, { Secret } from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();
const jwtSecretKey = process.env.JWT_SECRET_KEY as Secret;
import { Response, Request, NextFunction } from "express";

 
interface AuthenticatedRequest extends Request {
  user?: any;  
}

const authenticateJwt = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, jwtSecretKey, (err, user) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res.status(401).json({ message: "Token expired" });
        }
        console.log("JWT Verification Error:", err);

        return res.status(500).json({ message: "Internal Server Error" });
      }
      req.user = user;
      console.log("Decoded User:", user);
      next();
    });
  } else {
    return res.status(401).json({ message: "No token provided" });
  }
};

export default authenticateJwt;
