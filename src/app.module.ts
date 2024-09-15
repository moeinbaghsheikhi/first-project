import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'user_manage',
      entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
      synchronize: true
    }),
    UsersModule
  ]
})
export class AppModule {}