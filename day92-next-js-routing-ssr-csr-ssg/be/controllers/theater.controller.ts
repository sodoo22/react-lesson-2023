import TheaterModel from "../models/theaters.model";
import { Request, Response } from "express";

export const getTheaters = async (req: Request, res: Response) => {
  const page: number = Number(req.query.page) || 0;
  const perPage: number = Number(req.query.perPage);

  try {
    const theaters = await TheaterModel.find()
      .limit(perPage)
      .skip(perPage * page);
    res.status(200).json(theaters);
  } catch (error) {
    res.status(404).json({ data: [] });
  }
};

export const getTheaterById = async (req: Request, res: Response) => {
  try {
    const theaters = await TheaterModel.find({
      theaterId: Number(req.params.id),
    });
    res.status(200).json(theaters);
  } catch (error) {
    res.status(404).json({ data: [] });
  }
};

export const searchTheaters = async (req: Request, res: Response) => {
  console.log(req.query.keyword);
  const keyword: string = String(req.query.keyword);
  try {
    // const theater = await TheaterModel.find( {
    //     $or: [
    //         {"location.address.street1":  {$regex: new RegExp(keyword, 'i')}},
    //         {"location.address.city":  {$regex: new RegExp(keyword, 'i')}},
    //         {"location.address.state":  {$regex: new RegExp(keyword, 'i')}},
    //         {"location.address.zipcode":  {$regex: new RegExp(keyword, 'i')}},
    //     ]
    // })

    const fields = ["state", "city", "state", "zipcode"];
    const theater = await TheaterModel.find({
      $or: fields.map((field) => ({
        [`location.address.${field}`]: { $regex: new RegExp(keyword, "i") },
      })),
    });
    console.log(theater);
    res.status(200).json(theater);
  } catch (error) {
    res.status(404).json({ data: [] });
  }
};
