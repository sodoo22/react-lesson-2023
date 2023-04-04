import mongoose, { Schema } from "mongoose";

interface IComment {
  _id: { type: mongoose.Schema.Types.ObjectId };
  name: string;
  email: string;
  movie_id: { type: mongoose.Schema.Types.ObjectId };
  text: string;
}

const CommentSchema: Schema = new Schema({});

const CommentModel = mongoose.model<IComment>("Comment", CommentSchema);

export default CommentModel;
