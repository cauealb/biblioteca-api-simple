import type { UserRepository } from "../../../repository/contract/userRepository.js";

export class UpdateUserService {
    constructor (
        private repository: UserRepository
    ) {}

    async execute(id: number, password: string) {
        return this.repository.update(id, password)
    }
}