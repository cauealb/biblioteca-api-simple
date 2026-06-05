import type { User, UserRepository } from "../../../repository/contract/userRepository.js";

export class CreateUserService {
    constructor(
        private userRepository: UserRepository
    ) {}

    async execute(data: User) {
        const userExists = await this.userRepository.findByEmail(data.email)
        if(userExists) {
            throw new Error("Já existe um usuário com esse email!")
        }
        console.log(data)
        return this.userRepository.create(data)
    }
}