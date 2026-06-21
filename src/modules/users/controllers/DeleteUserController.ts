import type { FastifyReply, FastifyRequest } from "fastify";
import { PrismaUserRepository } from "../../../repository/PrismaUserRepository.js";
import { DeleteUserService } from "../services/DeleteUserService.js";
import z from "zod";

const repository = new PrismaUserRepository();
const service = new DeleteUserService(repository);

export class DeleteUserController {
  async handle(request: FastifyRequest, replay: FastifyReply) {
    const session = request.sessionUser;

    await service.execute(session?.idUser!);
    return replay.status(204).send();
  }
}
