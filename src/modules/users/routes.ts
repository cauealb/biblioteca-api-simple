import type { FastifyInstance } from "fastify";
import CreateUserController from "./controllers/CreateUserController.js";
import { DeleteUserController } from "./controllers/DeleteUserController.js";
import { ListManyUsersController } from "./controllers/ListManyUsersController.js";
import { ListUserByIdController } from "./controllers/ListUserByIdController.js";
import { UpdateUserController } from "./controllers/UpdateUserController.js";
import { ListUserByEmailController } from "./controllers/ListUserByEmailController.js";
import { ValidateSessionId } from "../../middlewares/validateSessionId.js";
import { ValidateAdmin } from "../../middlewares/validateAdmin.js";

const createUserController = new CreateUserController()
const deleteUserController = new DeleteUserController()
const listManyUsersController = new ListManyUsersController()
const listUserByIdController = new ListUserByIdController()
const listUserByEmailController = new ListUserByEmailController()
const updateUserController = new UpdateUserController()

export async function UserRoutes(app: FastifyInstance) {
    app.get('/users', {preHandler: [ValidateSessionId, ValidateAdmin]}, listManyUsersController.handle)
    app.get('/users/id/:id', listUserByIdController.handle)
    app.get('/users/email/:email', listUserByEmailController.handle)

    app.post('/users', createUserController.handle)
    app.delete('/users/:id', deleteUserController.handle)
    app.patch('/users/:id', updateUserController.handle)
}