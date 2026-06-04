import type { FastifyInstance } from "fastify";
import { PrismaClient } from "@prisma/client";
import z from "zod";

const prisma = new PrismaClient();

export async function UserRoutes(app: FastifyInstance) {
  app.get("/", async (_, replay) => {
    try {
      const user = await prisma.user.findMany();
      replay.status(200).send(user);
    } catch {
      replay.status(400).send("Erro ao visualizar usuários!");
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
        replay.status(200).send(user);
        return;
      }

      replay.status(404).send();
    } catch {
      replay.status(400).send("Erro ao visualizar usuário!");
    }
  });

  app.post("", async (request, replay) => {
    try {
      const requestSchema = z.object({
        name: z.string(),
        email: z.email(),
        password: z.coerce.string(),
      });

      const { name, email, password } = requestSchema.parse(request.body);

      const user = await prisma.user.findFirst({
        where: {
          email: email,
        },
      });

      if (user) {
        throw new Error();
      }

      await prisma.user.create({
        data: {
          name: name,
          email: email,
          password: password,
        },
      });
    } catch {
      replay.status(400).send("Erro ao criar usuário!");
    }
  });

  app.delete("/:id", async (request, replay) => {
    try {
      const idSchema = z.object({ id: z.coerce.number() });
      const { id } = idSchema.parse(request.params);

      await prisma.user.delete({
        where: { idUser: id }
      })

      replay.status(201).send()
    } catch {
      replay.status(400).send("Erro ao deletar usuário!");
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

        replay.status(200).send()
    } catch {
      replay.status(400).send("Erro ao atualizar senha do usuário!");
    }
  })
}
