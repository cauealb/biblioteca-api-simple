import type { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserService } from "../services/createUserService.js";
import { PrismaUserRepository } from "../../../repository/PrismaUserRepository.js";
import z from "zod";

const repository = new PrismaUserRepository();
const service = new CreateUserService(repository);

export default class CreateUserController {
  async handle(request: FastifyRequest, replay: FastifyReply) {
    const bodySchema = z.object({
      name: z.string(),
      email: z.email(),
      password: z.coerce.string(),
      nameRole: z.enum(["Admin", "User"]).default("User"),
    });

    const newUser = bodySchema.parse(request.body);

    const user = await service.execute({
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      idRole: newUser.nameRole === "User" ? 2 : 1,
    });

    replay.status(201).send(user);
  }
}
