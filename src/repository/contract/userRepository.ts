import type { User } from "@prisma/client";

export interface UserRepository {
    create(User: User): Promise<User>;
    update(id: number, password: string): Promise<boolean>
    delete(idUser: number): Promise<boolean>;

    findAll(): Promise<User[] | null>;
    findByEmail(email: string): Promise<User | null>;
    findById(id: number): Promise<User | null>;
}