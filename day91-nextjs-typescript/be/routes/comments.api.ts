import { Router } from "express";
import { getCommets } from "../controllers/comment.controller";

const commentRouter = Router();

commentRouter.get("/list", getCommets);

export default commentRouter;
