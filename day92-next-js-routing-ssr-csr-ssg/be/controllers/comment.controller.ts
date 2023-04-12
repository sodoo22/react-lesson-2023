import { Request, Response } from "express";
import CommentModel from "../models/comments.model";

export const getCommets = async (req: Request, res: Response) => {
  const page: number = Number(req.query.page) || 0;
  const perPage: number = Number(req.query.perPage);

  try {
    const comments = await CommentModel.find()
      .limit(perPage)
      .skip(perPage * page);
    res.status(200).json(comments);
  } catch (error) {
    res.status(404).json({ data: [] });
  }
};

export const getCommentById = async (req: Request, res: Response) => {
  try {
    const comments = await CommentModel.find({
      _id: req.params.id,
    });
    res.status(200).json(comments);
  } catch (error) {
    res.status(404).json({ data: [] });
  }
};

export const searchComments = async (req: Request, res: Response) => {
  console.log(req.query.keyword);
  const keyword: string = String(req.query.keyword);
  try {
    const fields = ["name", "text"];
    const comments = await CommentModel.find({
      $or: fields.map((field) => ({
        [field]: { $regex: new RegExp(keyword, "i") },
      })),
    });
    console.log(comments);
    res.status(200).json(comments);
  } catch (error) {
    res.status(404).json({ data: [] });
  }
};
