import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import passport from "passport";
import authRoutes from "./routes/auth.routes.js";
import expenseRoutes from "./routes/expenses.routes.js";
import categoryRoutes from "./routes/categories.routes.js";
import { yoga } from "./graphql/index.js";
import "./config/passport.js"; // load Google Strategy

dotenv.config();

const app = express();

// Middlewares
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:3000" }));
app.use(express.json());
app.use(passport.initialize()); // use passport

// REST endpoints
app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/categories", categoryRoutes);

// GraphQL endpoint
app.use(yoga.graphqlEndpoint, yoga);

export default app;
