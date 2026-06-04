import fastify from "fastify";
import { BookRoutes } from "./routes/Book/BookRoutes.js";
import { UserRoutes } from "./routes/User/UserRoutes.js";
const app = fastify();

app.register(UserRoutes, { prefix: 'user' });
app.register(BookRoutes, { prefix: 'book' });

export default app;