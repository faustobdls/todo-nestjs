import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Connection } from 'typeorm';
import { TodoModule } from './todo/todo.module';
import { DatabaseModule } from './database/database.module';
import { EnvModule } from './env/env.module';

@Module({
  imports: [AuthModule, UsersModule, TodoModule, DatabaseModule, EnvModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { 
  constructor(private readonly connection: Connection){
  }
}
