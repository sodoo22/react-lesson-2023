import mongoose, { Schema } from "mongoose";

interface IMovie {
  _id: { type: mongoose.Schema.Types.ObjectId };
  genres: string[];
  runtime: number;
  rated: string;

  num_mflix_comments: number;
  poster: string;
  title: string;
  fullplot: string;
}

const MovieSchema: Schema = new Schema({});

const MovieModel = mongoose.model<IMovie>("Comment", MovieSchema);

export default MovieModel;
