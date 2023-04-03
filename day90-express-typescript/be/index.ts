
import TheaterRouter from './routes/theaters.api'
import express, {Express, Request, Response} from "express"
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

require("dotenv").config();

const app: Express = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost:27017/test';



let name: string = "<h1>DAY-90  Express Typescript</h1>";
// name='1244'
let phoneNumber: number = 99119911
let isMarried: boolean = true
let sheeps: Array<string> = ['sheep1', "sheep2", "sheep3"]
let sheep: string[] = ['sheep1', "sheep2", "sheep3"]
let sheepObject: {name: string; age: number} ={
  name: 'sheep1',
  age:1
}
sheepObject.name='sheep2'
sheepObject.age=3

interface Student{
  name: string,
  age: number,
  isVerified: boolean,
}

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send(name);
});

app.use('/theaters', TheaterRouter)

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("Database connected succesfully"))
    .catch((error) => {
      console.error(error);
    });
  console.log(`Application running on http://localhost:${PORT}`);
});
