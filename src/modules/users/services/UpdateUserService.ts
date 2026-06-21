import { hash } from "bcrypt";
import type { UserRepository } from "../../../repository/contract/userRepository.js";

export class UpdateUserService {
    constructor (
        private repository: UserRepository
    ) {}

    async execute(id: number, password: string) {
        const salt = parseInt(process.env.salt!)
        const hashPassword = await hash(password, salt);

        return await this.repository.update(id, hashPassword)
    }
}