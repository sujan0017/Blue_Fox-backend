import express from "express";
import {
  editProfile,
  login,
  register,
  getProfileById,
} from "../controller/userController.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/profile/:id", getProfileById);

router.put("/profile/:id", editProfile);


export default router;
