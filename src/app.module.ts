import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'nest_test',
      entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
      synchronize: true
    }),
    UsersModule
  ]
})
export class AppModule {}