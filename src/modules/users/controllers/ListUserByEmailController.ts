import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { PrismaUserRepository } from "../../../repository/PrismaUserRepository.js";
import { ListUserByEmailService } from "../services/ListUserByEmailService.js";

const repository = new PrismaUserRepository();
const service = new ListUserByEmailService(repository);

export class ListUserByEmailController {
  async handle(request: FastifyRequest, replay: FastifyReply) {
    const emailSchema = z.object({ email: z.email() });
    const { email } = emailSchema.parse(request.params);

    const user = await service.execute(email);
    replay.status(200).send(user);
  }
}
