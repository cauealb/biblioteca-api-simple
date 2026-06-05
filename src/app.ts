import fastify from "fastify";
import cookie from "@fastify/cookie";;
import { UserRoutes } from "./modules/users/routes.js";
import { SessionRoutes } from "./modules/session/routes.js";
const app = fastify();

app.register(cookie)
app.register(UserRoutes)
app.register(SessionRoutes)

export default app;