import prisma from "../../lib/prisma.js";

export async function updateUser(idUser: number, password: string) {
    const user = await prisma.user.update({
        where: { idUser: idUser },
        data: { password: password }
    })

    if(user) return true;

    return false;
}