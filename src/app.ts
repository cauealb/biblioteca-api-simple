import fastify from "fastify";
import cookie from "@fastify/cookie";;
import { UserRoutes } from "./modules/users/routes.js";
import { SessionRoutes } from "./modules/session/routes.js";
import { RoleRoutes } from "./modules/role/routes.js";
import { BookRoutes } from "./modules/books/routes.js";
const app = fastify();

app.register(cookie)
app.register(UserRoutes)
app.register(SessionRoutes)
app.register(RoleRoutes)
app.register(BookRoutes)

export default app;