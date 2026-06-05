import type { UserRepository } from "../../../repository/contract/userRepository.js";

export class ListUserByEmailService {
    constructor(
        private repository: UserRepository
    ) {}

    async execute(email: string) {
        return this.repository.findByEmail(email)
    }
}