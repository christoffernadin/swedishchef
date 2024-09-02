import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { HouseholdModule } from './household/household.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'swedishchef.db',
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    HouseholdModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
