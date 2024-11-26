import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import bodyParser from "express";
import cors from "cors";  // Import cors

const app = express();

app.use(cors({
  origin: true,
  method: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))
app.use(bodyParser.json());


//userRouter
app.use('/backend', userRouter);

mongoose
  .connect(
    "mongodb+srv://shaludducollege:h2eobnCvqr3tcrY4@cluster0.x4spk.mongodb.net/",
    {
      dbName: "expenses-Tracker",
    }
  )
  .then(() => console.log("MongodB is connected...!"));

const port = 5000;

app.listen(port, () => console.log(`Server is running on port ${port}!`));
