import type { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserService } from "../services/CreateUserService.js";
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

    const {email, name, nameRole, password} = bodySchema.parse(request.body);

    const user = await service.execute({
      name: name,
      email: email,
      password: password,
      idRole: nameRole === "User" ? 2 : 1,
    });

    replay.status(201).send(user);
  }
}
