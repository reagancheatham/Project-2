import dotenv from "dotenv";
dotenv.config();

import express, { json, urlencoded } from "express";
import cors from "cors";
import db from "./app/models/index.js";
import setupRoutes from "./app/routes/course.routes.js";

const app = express();
const corsOptions = {
    origin: "http://localhost:8081",
};
const port = process.env.PORT || 8080;

app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ extended: true }));

db.sequelize.sync();

setupRoutes(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
