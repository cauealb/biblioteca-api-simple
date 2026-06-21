import type { FastifyReply, FastifyRequest } from "fastify";
import { PrismaSessionRepository } from "../../../repository/prismaSessionRepository.js";
import { DeleteSessionIdService } from "../services/DeleteSessionIdService.js";

const repository = new PrismaSessionRepository()
const service = new DeleteSessionIdService(repository)

export class DeleteSessionIdController {
    async handle(request: FastifyRequest, replay: FastifyReply) {
        const session = request.sessionUser;

        await service.execute(session?.idSession!);
        replay.clearCookie('sessionId', {path: '/'})
        
        replay.status(204).send()
    }
}