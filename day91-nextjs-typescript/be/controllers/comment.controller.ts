import { Request, Response } from "express";
import CommentModel from "../models/comments.model";

export const getCommets = async (req: Request, res: Response) => {
  const page: number = Number(req.query.page) || 0;
  const commentsPerPage: number = Number(req.query.commentsPerPage);

  try {
    const comments = await CommentModel.find()
      .limit(commentsPerPage)
      .skip(commentsPerPage * page);
    res.status(200).json(comments);
  } catch (error) {
    res.status(404).json({ data: [] });
  }
};
