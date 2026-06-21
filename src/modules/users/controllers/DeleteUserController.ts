import type { FastifyReply, FastifyRequest } from "fastify";
import { PrismaUserRepository } from "../../../repository/PrismaUserRepository.js";
import { DeleteUserService } from "../services/DeleteUserService.js";
import z from "zod";
import { PrismaSessionRepository } from "../../../repository/prismaSessionRepository.js";

const userRepository = new PrismaUserRepository();
const sessionRepository = new PrismaSessionRepository()
const service = new DeleteUserService(userRepository, sessionRepository);

export class DeleteUserController {
  async handle(request: FastifyRequest, replay: FastifyReply) {
    const session = request.sessionUser;

    await service.execute(session?.idUser!);
    replay.clearCookie('sessionId', {path: '/'})
    return replay.status(204).send();
  }
}
