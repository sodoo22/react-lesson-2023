import mongoose, { Schema } from "mongoose";

interface IViewers {
  rating: number;
  numReviews: number;
  meter: number;
}

interface ITomatoes {
  viewer: IViewers;
  lastUpdated: Date;
}

interface IMovie {
  _id: { type: mongoose.Schema.Types.ObjectId };
  genres: string[];
  runtime: number;
  rated: string;
  num_mflix_comments: number;
  poster: string;
  title: string;
  fullplot: string;
  languages: string[];
  released: Date;
  directors: string[];
  writers: string[];
  awards: {};
  lastupdated: Date;
  year: number;
  imdb: {};
  countries: string[];
  type: string;
  tomatoes: ITomatoes;
}

const MovieSchema: Schema = new Schema({});

const MovieModel = mongoose.model<IMovie>("Movie", MovieSchema);

export default MovieModel;
