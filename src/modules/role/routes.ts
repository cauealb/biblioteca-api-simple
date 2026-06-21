import type { FastifyInstance } from "fastify";
import { ListRoleByNameController } from "./controllers/ListRoleByNameController.js";
import { CreateRoleController } from "./controllers/CreateRoleController.js";
import { ListRolesController } from "./controllers/ListRoleController.js";
import { ValidateSessionId } from "../../middlewares/validateSessionId.js";
import { ListRoleByIdController } from "./controllers/ListRoleByIdController.js";
import { ValidateAdmin } from "../../middlewares/validateAdmin.js";

const listRolesController = new ListRolesController()
const listRoleByNameController = new ListRoleByNameController()
const listRoleByIdController = new ListRoleByIdController()
const createRoleController = new CreateRoleController()

export async function RoleRoutes(app: FastifyInstance) {
    app.get('/roles', {preHandler: [ValidateSessionId, ValidateAdmin]}, listRolesController.handle)
    app.get('/roles/id/:id', {preHandler: [ValidateSessionId, ValidateAdmin]}, listRoleByIdController.handle)
    app.get('/roles/name/:name', {preHandler: [ValidateSessionId, ValidateAdmin]}, listRoleByNameController.handle)

    app.post('/roles', { preHandler: [ValidateSessionId, ValidateAdmin] }, createRoleController.handle)
}