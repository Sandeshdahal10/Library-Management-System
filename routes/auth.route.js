import express from "express";
import { loginUser, registerUser } from "../controller/auth.controller.js";
import { authorizationRoles, verifyToken } from "../middleware/verifytoken.js";

const router = express.Router();

router.post(
  "/register",
  verifyToken,
  authorizationRoles("Librarian"),
  registerUser
);
router.post("/login", loginUser);

export default router;
