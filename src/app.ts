import express, { Application, Request, Response } from "express";

const app: Application = express();
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const corsOptions = {
  // Allow requests from your client application layout
  origin: ["http://localhost:5173", "http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // Allow cookies or auth headers over CORS requests
};

// Enable CORS
app.use(cors(corsOptions));

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript + Express!");
});

export default app;
