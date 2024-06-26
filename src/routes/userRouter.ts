import { Router } from "express";

import { UserCotroller } from "../controllers/UserController";
import { UserService } from "../services/UserService";

const userRouter = Router();
const userService = new UserService();
const userController = new UserCotroller(userService);

userRouter.get("/", userController.getUser);

export default userRouter;
