import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { DatabaseModule } from 'src/core/database/database.module';
import { UserRepository } from './repositories/user.repository';
import { IsEmailNotRegistered } from './validations/email.validation';
import { User } from './entities/user.entity';
import { userProviders } from './user.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    UserRepository,
    IsEmailNotRegistered,
    ...userProviders
  ],
})

export class UserModule {}
