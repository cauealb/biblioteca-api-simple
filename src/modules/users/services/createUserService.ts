import type { User, UserRepository } from "../../../repository/contract/userRepository.js";
import { hash } from 'bcrypt'

export class CreateUserService {
    constructor(
        private userRepository: UserRepository,
    ) {}

    async execute(data: User) {
        const userExists = await this.userRepository.findByEmail(data.email)
        if(userExists) {
            throw new Error("Já existe um usuário com esse email!")
        }

        const salt: number = parseInt(process.env.salt!)
        const hashPassword: string = await hash(data.password, salt)

        return await this.userRepository.create({...data, password: hashPassword})
    }
}