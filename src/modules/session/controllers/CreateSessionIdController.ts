import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { PrismaUserRepository } from "../../../repository/PrismaUserRepository.js";
import { PrismaSessionRepository } from "../../../repository/PrismaSessionRepository.js";
import { CreateSessionIdService } from "../services/CreateSessionIdService.js";

const userRepository = new PrismaUserRepository();
const sessionRepository = new PrismaSessionRepository();
const sessionService = new CreateSessionIdService(
  sessionRepository,
  userRepository,
);

export class CreateSessionIdController {
  async handle(request: FastifyRequest, replay: FastifyReply) {
    const idSchema = z.object({ id: z.coerce.number() });
    const { id } = idSchema.parse(request.params);

    const session = await sessionService.execute(id);

    console.log(session)
    replay.setCookie("sessionId", session.sessionId, {
      path: "/",
      expires: session.expireAt,
    });

    replay.status(201).send();
  }
}
