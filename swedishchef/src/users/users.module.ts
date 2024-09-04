import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Household } from '../household/entities/households.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Household])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
