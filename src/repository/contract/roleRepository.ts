export interface Role {
    idRole: number
    nameRole: string
}

export interface roleRepository {
    create(nameRole: string): Promise<Role>
    delete(id: number): Promise<boolean>

    findAll(): Promise<Role[] | null>
    findById(id: number): Promise<Role | null>
    findByName(name: string): Promise<Role | null>
}