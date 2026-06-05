import type { FastifyInstance } from "fastify";
import CreateUserController from "./controllers/CreateUserController.js";
import { DeleteUserController } from "./controllers/DeleteUserController.js";
import { ListManyUsersController } from "./controllers/ListManyUsersController.js";
import { ListUserByIdController } from "./controllers/ListUserByIdController.js";
import { UpdateUserController } from "./controllers/UpdateUserController.js";

const createUserController = new CreateUserController()
const deleteUserController = new DeleteUserController()
const listManyUsersController = new ListManyUsersController()
const listUserByIdController = new ListUserByIdController()
const updateUserController = new UpdateUserController()

export async function UserRoutes(app: FastifyInstance) {
    app.get('/users', listManyUsersController.handle)
    app.get('/users/:id', listUserByIdController.handle)
    // TODO: Rota por email

    app.post('/users', createUserController.handle)
    app.delete('/users/:id', deleteUserController.handle)
    app.patch('/users/:id', updateUserController.handle)
}