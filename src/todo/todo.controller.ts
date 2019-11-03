import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { Todo } from './todo.entity';
import { TodoService } from './todo.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('todo')
export class TodoController {

    constructor(private todoService: TodoService){}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    index(): Promise<Todo[]> {
      return this.todoService.findAll();
    } 

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() todoData: Todo){
        return this.todoService.create(todoData);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async update(@Param('id') id, @Body() todoData: Todo){
        todoData.id = Number(id);
        console.log('Update #' + todoData.id)
        return this.todoService.update(todoData);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async delete(@Param('id') id){
        return this.todoService.delete(id);
    }

}
