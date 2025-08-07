import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/database.js";
import router from "./routes/book.route.js";
import borrowRouter from "./routes/borrower.route.js";
import authRouter from "./routes/auth.route.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
}));

const PORT = process.env.PORT || 8000;
connectDB();

app.use("/api", router);
app.use("/api", borrowRouter);
app.use("/api", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
