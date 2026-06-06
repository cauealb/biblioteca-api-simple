import type { FastifyInstance } from "fastify";
import { ListRoleByNameController } from "./controllers/ListRoleByNameController.js";
import { CreateRoleController } from "./controllers/CreateRoleController.js";
import { ListRolesController } from "./controllers/ListRoleController.js";
import { ValidateSessionId } from "../../middlewares/validateSessionId.js";

const listRolesController = new ListRolesController()
const listRoleByNameController = new ListRoleByNameController()
const createRoleController = new CreateRoleController()

export async function RoleRoutes(app: FastifyInstance) {
    app.get('/roles', listRolesController.handle)
    app.get('/roles/name/:name', listRoleByNameController.handle)

    app.post('/roles', createRoleController.handle)
}