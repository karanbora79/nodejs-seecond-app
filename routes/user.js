import express from "express";
import { deleteUser, getAllUsers, getUserDetail, register, special, updateUser } from "../controllers/user.js";

const router = express.Router();

router.get("/all",getAllUsers);

router.post("/new",register);

router.get("/userid/special",special);

router.get("/userid/:id",getUserDetail);

router.put("/userid/:id",updateUser);

router.put("/userid/:id",deleteUser);
export default router;