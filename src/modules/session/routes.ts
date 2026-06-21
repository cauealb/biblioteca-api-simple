import type { FastifyInstance } from "fastify";
import { ListSessionIdController } from "./controllers/ListSessionIdController.js";
import { ListSessionIdByIdController } from "./controllers/ListSessionIdByIdController.js";
import { DeleteSessionIdController } from "./controllers/DeleteSessionIdController.js";
import { ValidateAdmin } from "../../middlewares/validateAdmin.js";
import { AuthenticateUserController } from "../users/controllers/AuthenticateUserController.js";
import { ValidateSessionId } from "../../middlewares/validateSessionId.js";

const listSessionIdController = new ListSessionIdController()
const deleteSessionIdController = new DeleteSessionIdController()
const listSessionIdByIdController = new ListSessionIdByIdController()
const authenticateContoller = new AuthenticateUserController()

export async function SessionRoutes(app: FastifyInstance) {
    app.get('/session', {preHandler: [ValidateAdmin]}, listSessionIdController.handle)
    app.get('/session/:sessionId', {preHandler: [ValidateAdmin]}, listSessionIdByIdController.handle)
    
    app.post('/login', authenticateContoller.handle)
    app.delete('/logout', {preHandler: [ValidateSessionId]}, deleteSessionIdController.handle)
}