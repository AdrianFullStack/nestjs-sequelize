import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { v4 as uuid } from 'uuid'
import * as bcrypt from 'bcrypt';
import { UserRepository } from './repositories/user.repository';
import { User } from './entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userRepository: UserRepository) {}
  
  @Get()
  async findAll(): Promise<User[]> {
    return this.userRepository.findAll()
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    createUserDto.id = uuid()
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10)
    return await this.userRepository.create(createUserDto);
  }
}
