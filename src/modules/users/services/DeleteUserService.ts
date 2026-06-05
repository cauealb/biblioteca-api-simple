import type { FastifyReply, FastifyRequest } from "fastify";
import { PrismaUserRepository } from "../../../repository/PrismaUserRepository.js";
import type { UserRepository } from "../../../repository/contract/userRepository.js";

export class DeleteUserService {
  constructor(private repository: UserRepository) {}

  async execute(id: number) {
    const userExists = await this.repository.findById(id);

    if (userExists) {
      return this.repository.delete(id);
    }

    throw new Error("Este id não pertence a um usuário!");
  }
}
