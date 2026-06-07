import type { FastifyInstance } from "fastify";
import { CreateSessionIdController } from "./controllers/CreateSessionIdController.js";
import { ListSessionIdController } from "./controllers/ListSessionIdController.js";
import { ListSessionIdByIdController } from "./controllers/ListSessionIdByIdController.js";
import { DeleteSessionIdController } from "./controllers/DeleteSessionIdController.js";
import { ValidateAdmin } from "../../middlewares/validateAdmin.js";

const listSessionIdController = new ListSessionIdController()
const createSessionIdController = new CreateSessionIdController()
const deleteSessionIdController = new DeleteSessionIdController()
const listSessionIdByIdController = new ListSessionIdByIdController()

export async function SessionRoutes(app: FastifyInstance) {
    app.get('/session', {preHandler: [ValidateAdmin]}, listSessionIdController.handle)
    app.get('/session/:sessionId', {preHandler: [ValidateAdmin]}, listSessionIdByIdController.handle)
    
    app.post('/session/:id', createSessionIdController.handle)
    app.delete('/session/:id', deleteSessionIdController.handle)
}