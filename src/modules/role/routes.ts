import type { FastifyInstance } from "fastify";
import { ListRoleByNameController } from "./controllers/ListRoleByNameController.js";

const listRoleByNameController = new ListRoleByNameController()

export async function RoleRoutes(app: FastifyInstance) {
    app.get('/roles/name/:name', listRoleByNameController.handle)
}