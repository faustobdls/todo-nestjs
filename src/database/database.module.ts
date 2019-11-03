import { Module, Global, DynamicModule } from '@nestjs/common'
import { EnvModule } from '../env/env.module'
import { EnvService } from '../env/env.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Users } from 'src/users/users.entity'
import { Todo } from 'src/todo/todo.entity'

function DatabaseOrmModule (): DynamicModule {
  const config = new EnvService().read()

  return TypeOrmModule.forRoot({
    type: config.DB_TYPE,
    host: config.DB_HOST,
    port: config.DB_PORT,
    username: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    entities: [Users, Todo],
    synchronize: true,
  })
}

@Global()
@Module({
  imports: [
    EnvModule,
    DatabaseOrmModule()
  ]
})
export class DatabaseModule { }
