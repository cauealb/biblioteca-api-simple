import type { FastifyInstance } from "fastify";
import { PrismaClient } from "@prisma/client";
import z from "zod";

const prisma = new PrismaClient();

export async function RoleRoutes(app: FastifyInstance) {
  app.post("", async (request, replay) => {
    try {
      const bodySchema = z.object({ name: z.string() });
      const { name } = bodySchema.parse(request.body);

      await prisma.role.create({
        data: {
          nameRole: name,
        },
      });

      return replay.status(201).send();
    } catch {
      return replay.status(400).send("Erro ao incluir cargo!");
    }
  });

  app.get("", async (request, replay) => {
    try {
      const roles = await prisma.role.findMany();
      return replay.status(200).send(roles);
    } catch {
      return replay.status(400).send("Erro ao visualizar cargos!");
    }
  });
}
