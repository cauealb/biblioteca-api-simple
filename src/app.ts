import fastify from "fastify";
import cookie from "@fastify/cookie";
import { Routes } from "./routes/routes.js";
import { UserRoutes } from "./modules/users/routes.js";
const app = fastify();

app.register(cookie)
app.register(UserRoutes)

export default app;