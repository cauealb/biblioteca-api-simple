import prisma from "../../lib/prisma.js";

export async function deleteUser(idUser: number) {
    const user = await prisma.user.delete({
        where: { idUser: idUser }
    })

    if(user) return true;

    return false;
}