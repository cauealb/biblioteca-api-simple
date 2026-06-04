import fastify from "fastify";
import cookie from "@fastify/cookie";
import { Routes } from "./routes/routes.js";
const app = fastify();

app.register(cookie)
app.register(Routes)

export default app;