import fastify from "fastify";
import { BookRoutes } from "./routes/Libary/BookRoutes.js";
const app = fastify();

app.register(BookRoutes, { prefix: 'book' });

export default app;