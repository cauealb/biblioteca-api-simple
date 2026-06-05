import type { User, UserRepository } from "../../../repository/contract/userRepository.js";
import z from "zod";

export class CreateUserService {
    constructor(
        private userRepository: UserRepository
    ) {}

    async createUser(data: any) {
        const bodySchema = z.object({ 
            name: z.string(), 
            email: z.email(), 
            password: z.coerce.string(),
            nameRole: z.enum(["Admin", "User"]).default("User")
        });

        const newUser = bodySchema.safeParse(data)
        if (newUser.error) {
            throw new Error("Dados incorretos, tente novamente")
        }

        const userExists = await this.userRepository.findByEmail(data.email)
        if(userExists) {
            throw new Error("Já existe um usuário com esse email!")
        }

        const user: User = {...newUser.data, idRole: newUser.data.nameRole === "User" ? 2 : 1}
        return this.userRepository.create(user)
    }
}