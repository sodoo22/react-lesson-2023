import { Router } from "express";
import { getCommentById, getCommets, searchComments } from "../controllers/comment.controller";

const commentRouter = Router();

commentRouter.get("/list", getCommets);

commentRouter.get("/byId/:id", getCommentById);

commentRouter.get("/search", searchComments);

export default commentRouter;
