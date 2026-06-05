import type { roleRepository } from "../../../repository/contract/roleRepository.js";

export class CreateRoleService {
    constructor(
        private repository: roleRepository
    ) {}

    async execute(name: string) {
        return await this.repository.create(name)
    }
}