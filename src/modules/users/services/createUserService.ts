import type { User } from "@prisma/client";
import type { UserRepository } from "../../../repository/contract/userRepository.js";

export default class createUserService {
    constructor(
        private userRepository: UserRepository
    ) {}

    async createUser(data: User) {
        const user = await this.userRepository.findByEmail(data.email)

        if(user) {
            throw new Error("Já existe um usuário com esse email!")
        }

        return this.userRepository.create(data)
    }
}