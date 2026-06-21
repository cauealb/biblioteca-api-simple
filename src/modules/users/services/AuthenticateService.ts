import type { UserRepository } from "../../../repository/contract/userRepository.js";
import dotenv from 'dotenv'
import { compare, hash } from "bcrypt";
import type { sessionRepository } from "../../../repository/contract/sessionRepository.js";

dotenv.config()
export class AuthenticateUserService {
    constructor(
        private userRepository: UserRepository,
        private sessionRepository: sessionRepository
    ) {}

    async execute(email: string, password: string) {
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new Error("Est usuário não existe no nosso banco de dados!");
        }

        const salt: number = parseInt(process.env.salt!);
        const takeHashPassword: string = await hash(password, salt)
        const comparePasswords: boolean = await compare(takeHashPassword, user.password);
        
        if(!comparePasswords) {
            throw new Error("Senha não válida!");
        }

        this.sessionRepository.create()
    }
}