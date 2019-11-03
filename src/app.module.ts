import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection, getConnectionOptions } from 'typeorm';
import { TodoModule } from './todo/todo.module';
import { Users } from './users/users.entity';
import { Todo } from './todo/todo.entity';

@Module({
  imports: [AuthModule, UsersModule, TodoModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'todoroot',
    password: '12345678',
    database: 'todonest',
    entities: [Users, Todo],
    synchronize: true,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { 
  constructor(private readonly connection: Connection){
  }
}
