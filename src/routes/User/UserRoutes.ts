import type { FastifyInstance } from "fastify";
import prisma from "../../lib/prisma.js";
import z from "zod";
import { randomUUID } from "node:crypto";
import { findManyUser } from "../../services/User/findManyUser.js";
import { findUserById } from "../../services/User/findFirstUserById.js";
import { findUserByEmail } from "../../services/User/findFirstUserByEmail.js";
import { findRoleByName } from "../../services/Role/findRoleByName.js";
import { createSessionId } from "../../services/Session/createSessionId.js";
import { deleteUser } from "../../services/User/deleteUser.js";
import { updateUser } from "../../services/User/updateUser.js";

export async function UserRoutes(app: FastifyInstance) {
  app.get("/", async (_, replay) => {
    try {
      const user = await findManyUser()
      return replay.status(200).send(user);
    } catch {
      return replay.status(400).send("Erro ao visualizar usuários!");
    }
  });

  app.get("/:id", async (request, replay) => {
    try {
      const idSchema = z.object({ id: z.coerce.number() });
      const { id } = idSchema.parse(request.params);

      const user = await findUserById(id)

      if (user) {
        return replay.status(200).send(user);
      }

      return replay.status(404).send();
    } catch {
      return replay.status(400).send("Erro ao visualizar usuário!");
    }
  });

  app.patch('/:id', async (request, replay) => {
    try {
        const idSchema = z.object({ id: z.coerce.number() });
        const { id } = idSchema.parse(request.params);

        const requestSchema = z.object({ password: z.string() });
        const { password } = requestSchema.parse(request.body);

        if (!await updateUser(id, password)) {
          return replay.status(200).send()
        } 

        return replay.status(400).send()
    } catch {
      return replay.status(400).send("Erro ao atualizar senha do usuário!");
    }
  })
}
