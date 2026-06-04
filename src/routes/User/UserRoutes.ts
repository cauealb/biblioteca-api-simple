import type { FastifyInstance } from "fastify";
import prisma from "../../lib/prisma.js";
import z from "zod";
import { randomUUID } from "node:crypto";
import { findManyUser } from "../../services/User/findManyUser.js";

export async function UserRoutes(app: FastifyInstance) {
  app.get("/", async (_, replay) => {
    try {
      const user = findManyUser()
      return replay.status(200).send(user);
    } catch {
      return replay.status(400).send("Erro ao visualizar usuários!");
    }
  });

  app.get("/:id", async (request, replay) => {
    try {
      const idSchema = z.object({ id: z.coerce.number() });
      const { id } = idSchema.parse(request.params);

      const user = await prisma.user.findFirst({
        where: { idUser: id },
      });

      if (user) {
        return replay.status(200).send(user);
      }

      return replay.status(404).send();
    } catch {
      return replay.status(400).send("Erro ao visualizar usuário!");
    }
  });

  app.post("", async (request, replay) => {
    try {
      const requestSchema = z.object({
        name: z.string(),
        email: z.email(),
        password: z.coerce.string(),
        nameRole: z.enum(["Admin", "User"]).default("User")
      });

      const { name, email, password, nameRole } = requestSchema.parse(request.body);

      const findUser = await prisma.user.findFirst({
        where: {
          email: email,
        },
      });

      if (findUser) {
        throw new Error();
      }

      const role = await prisma.role.findFirst({
        where: { nameRole: nameRole }
      })

      const user = await prisma.user.create({
        data: {
          name: name,
          email: email,
          password: password,
          idRole: role!.idRole
        },
      });

      if(user) {
        let sessionId = randomUUID()

        await

        return
      }

      throw new Error()
    } catch {
      return replay.status(400).send("Erro ao criar usuário!");
    }
  });

  app.delete("/:id", async (request, replay) => {
    try {
      const idSchema = z.object({ id: z.coerce.number() });
      const { id } = idSchema.parse(request.params);

      await prisma.user.delete({
        where: { idUser: id }
      })

      return replay.status(201).send()
    } catch {
      return replay.status(400).send("Erro ao deletar usuário!");
    }
  });

  app.patch('/:id', async (request, replay) => {
    try {
        const idSchema = z.object({ id: z.coerce.number() });
        const { id } = idSchema.parse(request.params);

        const requestSchema = z.object({ password: z.string() });
        const { password } = requestSchema.parse(request.body);

        await prisma.user.update({
            where: { idUser: id },
            data: { password: password }
        })

        return replay.status(200).send()
    } catch {
      return replay.status(400).send("Erro ao atualizar senha do usuário!");
    }
  })
}
