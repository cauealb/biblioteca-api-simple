import type { FastifyInstance } from "fastify";
import { UserRoutes } from "./User/UserRoutes.js";
import { RoleRoutes } from "./Role/RoleRoutes.js";
import { BookRoutes } from "./Book/BookRoutes.js";

export async function Routes(app: FastifyInstance) {
    app.register(RoleRoutes, {
        prefix: '/roles'
    })

    app.register(UserRoutes, {
        prefix: '/users'
    })

    app.register(BookRoutes, {
        prefix: '/books'
    })
}