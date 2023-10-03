import { Injectable, Inject } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UserRepository {
    constructor(
        @Inject('USER_ENTITY')
        private readonly useEntiry: typeof User
    ) {}

    public async findAll(): Promise<User[]> {
        return this.useEntiry.findAll({ attributes: ['id', 'name', 'email', 'createdAt'] })
    }

    public async findByEmail(email: string): Promise<User> {
        const user = await this.useEntiry.findOne({ where: { email } });
        return user
    }

    public async create(createUserDto: CreateUserDto): Promise<User> {
        return this.useEntiry.create({... createUserDto})
    }
}
