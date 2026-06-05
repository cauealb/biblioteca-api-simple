import type { FastifyInstance } from "fastify";
import { ListRoleByNameController } from "./controllers/ListRoleByNameController.js";
import { CreateRoleController } from "./controllers/CreateRoleController.js";

const listRoleByNameController = new ListRoleByNameController()
const createRoleController = new CreateRoleController()

export async function RoleRoutes(app: FastifyInstance) {
    // TODO: Listar Todos
    app.get('/roles/name/:name', listRoleByNameController.handle)

    app.post('/roles', createRoleController.handle)
}