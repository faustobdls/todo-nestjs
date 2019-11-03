import { Injectable } from '@nestjs/common';
import { Users } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>,
        ) {

    }

    async findAll(): Promise<Users[]> {
        return this.usersRepository.find();
    }

    async findById(id: any): Promise<Users | undefined> {
        const user = await this.usersRepository.findOne(id);
        const {password, ...result} = user; 
        return result;
    }

    async findOne(email?: string, password?: string): Promise<Users | undefined> {
        return this.usersRepository.findOneOrFail(null, {
            where: { email: email, password: password }
        });
    }

    async  create(users: Users): Promise<Users> {
        return await this.usersRepository.save(users);
    }

    async update(users: Users): Promise<UpdateResult> {
        return await this.usersRepository.update(users.id, users);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.usersRepository.delete(id);
    }
}