import { Router } from "express";
import {
  getMovieById,
  getMovies,
  searchMovies,
} from "../controllers/movie.controller";

const moviesRouter = Router();

moviesRouter.get("/list", getMovies);

moviesRouter.get("/byId/:id", getMovieById);

moviesRouter.get("/search", searchMovies);

export default moviesRouter;
