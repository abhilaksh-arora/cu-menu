import express from "express";
const app = express();
import cors from "cors";

import connectDB from "./config/db.js";
import router from "./route/formRoute.js";

const PORT = process.env.PORT || 1000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", router);
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
