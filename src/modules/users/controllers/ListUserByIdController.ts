import type { FastifyReply, FastifyRequest } from "fastify";
import { PrismaUserRepository } from "../../../repository/PrismaUserRepository.js";
import { ListUserByIdService } from "../services/ListUserByIdService.js";
import z from "zod";

const repository = new PrismaUserRepository();
const service = new ListUserByIdService(repository);

export class ListUserByIdController {
  async handle(request: FastifyRequest, replay: FastifyReply) {
    const idSchema = z.object({ id: z.coerce.number() });
    const { id } = idSchema.parse(request.params);

    const user = await service.execute(id);
    replay.status(200).send(user);
  }
}
