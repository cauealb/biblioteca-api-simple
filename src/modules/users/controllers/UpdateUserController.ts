import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { PrismaUserRepository } from "../../../repository/PrismaUserRepository.js";
import { UpdateUserService } from "../services/UpdateUserService.js";

const repository = new PrismaUserRepository();
const service = new UpdateUserService(repository);

export class UpdateUserController {
  async handle(request: FastifyRequest, replay: FastifyReply) {
    const session = request.sessionUser

    const passwordSchema = z.object({ password: z.coerce.string() });
    const { password } = passwordSchema.parse(request.body);

    await service.execute(session?.idUser!, password);
    replay.status(200).send();
  }
}
