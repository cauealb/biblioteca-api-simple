import type { UserRepository } from "../../../repository/contract/userRepository.js";
import { compare } from "bcrypt";
import type { sessionRepository } from "../../../repository/contract/sessionRepository.js";

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

        const comparePasswords: boolean = await compare(password, user.password);
        if(!comparePasswords) {
            throw new Error("Senha não válida!");
        }

        const session = await this.sessionRepository.create(user.idUser!);
        return session
    }
}