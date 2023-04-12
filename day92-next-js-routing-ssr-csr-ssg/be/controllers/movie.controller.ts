import MovieModel from "../models/movies.model";
import { Request, Response } from "express";

export const getMovies = async (req: Request, res: Response) => {
  const page: number = Number(req.query.page) || 0;
  const perPage: number = Number(req.query.perPage) || 12;

  try {
    const movies = await MovieModel.find()
      .limit(perPage)
      .skip(perPage * page)
      .sort({ year: -1 });
    res.status(200).json(movies);
  } catch (error) {
    res.status(404).json({ data: [] });
  }
};

export const getMovieById = async (req: Request, res: Response) => {
  console.log(req.params.id);
  try {
    const movies = await MovieModel.find({
      _id: req.params.id,
    });
    res.status(200).json(movies);
  } catch (error) {
    res.status(404).json({ data: [] });
  }
};

export const searchMovies = async (req: Request, res: Response) => {
  const keyword: string = String(req.query.keyword);
  try {
    const fields = ["title", "genres", "plot", "cast", "directors", "writers"];
    const movies = await MovieModel.find({
      $or: fields.map((field) => ({
        [field]: { $regex: new RegExp(keyword, "i") },
      })),
    });

    res.status(200).json(movies);
  } catch (error) {
    res.status(404).json({ data: [] });
  }
};
