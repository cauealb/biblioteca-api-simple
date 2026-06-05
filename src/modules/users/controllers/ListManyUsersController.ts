import type { FastifyReply, FastifyRequest } from "fastify";
import { PrismaUserRepository } from "../../../repository/PrismaUserRepository.js";
import { ListManyUsersService } from "../services/ListManyUsersService.js";

const repository = new PrismaUserRepository();
const service = new ListManyUsersService(repository);

export class ListManyUsersController {
  async handle(request: FastifyRequest, replay: FastifyReply) {
    const user = await service.handle();
    replay.status(200).send(user);
  }
}
