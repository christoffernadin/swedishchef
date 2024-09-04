import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { HouseholdModule } from './household/households.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'swedishchef',
      password: 'swechef123',
      database: 'swedishchef',
      entities: [__dirname + '/**/*.entity.ts'],
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
