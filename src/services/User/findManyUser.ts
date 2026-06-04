import prisma from "../../lib/prisma.js";

export async function findManyUser() {
    const users = await prisma.user.findMany();
    return users;
}