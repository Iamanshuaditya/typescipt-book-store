import express from 'express'
const router = express.Router();
import signup from "../controllers/userController/userSignup"
import  login  from "../controllers/userController/userLogin"
import me from "../controllers/userController/userMe"
import authenticateJwt from "../middlewares/authMiddleware"
import SearchBook from "../controllers/BooksController/SearchBook"
router.post("/signup", signup);
router.post("/login", login);
router.get("/me", authenticateJwt, me);
router.get("/search", SearchBook);
export default router;