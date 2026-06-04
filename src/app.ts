import fastify from "fastify";
import { BookRoutes } from "./routes/Book/BookRoutes.js";
import { UserRoutes } from "./routes/User/UserRoutes.js";
import cookie from "@fastify/cookie";
import { RoleRoutes } from "./routes/Role/RoleRoutes.js";
const app = fastify();

app.register(cookie)
app.register(RoleRoutes, { prefix: 'roles' });
app.register(UserRoutes, { prefix: 'user' });
app.register(BookRoutes, { prefix: 'book' });

export default app;