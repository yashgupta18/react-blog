import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import commentRoutes from "./routes/blog.js";

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/api", commentRoutes);
app.use(express.json());

const PORT = process.env.PORT || 8000;
const CONNECTION_URL =
  "mongodb+srv://Blog:Blog123@cluster0.usxry.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port:${PORT} `))
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
