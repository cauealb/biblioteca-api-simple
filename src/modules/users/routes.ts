import type { FastifyInstance } from "fastify";
import CreateUserController from "./controllers/createUserController.js";
import { DeleteUserController } from "./controllers/DeleteUserController.js";
import { ListManyUsersController } from "./controllers/ListManyUsersController.js";

const createUserController = new CreateUserController()
const deleteUserController = new DeleteUserController()
const listManyUsersController = new ListManyUsersController()

export async function UserRoutes(app: FastifyInstance) {
    app.get('/users', listManyUsersController.handle)
    app.post('/users', createUserController.handle)
    app.delete('/users/:id', deleteUserController.handle)
}