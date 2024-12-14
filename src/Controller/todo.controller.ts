import { Body, Controller, Delete, Get, Param, Post, Put, Render } from "@nestjs/common";
import { title } from "process";
import { CreateTodoDto } from "src/dto/CreateTodoDto";
import { TodoService } from "src/Services/todo.service";

@Controller('todos')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Get()
    @Render('index')
    findAll() {
        const todos = this.todoService.findAll();
        return { title: 'ToDo List', todos};
    }

    @Get(':id')
    @Render('details')
    findOne(@Param('id') id: string) {
        const todo = this.todoService.findOne(Number(id));
        if(!todo) return { title: 'ToDo Details', message: `Todo with ID ${id} not found.`};
        return { title: 'ToDo Details', todo}
    }

    @Post()
    @Render('index')
    async create(@Body() createTodoDto: CreateTodoDto) {
        const message = await this.todoService.create(createTodoDto);
        const todos = await this.todoService.findAll();
        return { title: 'ToDo List', todos, message };
    }

    @Put(':id')
    @Render('index')
    async update(@Param('id') id: string, @Body() body) {
        const message = await this.todoService.update(Number(id), body.title, body.description);
        const todos = await this.todoService.findAll();
        return { title: 'ToDo List', todos, message};
    }

    @Delete(':id')
    @Render('index')
    async delete(@Param('id') id: string) {
        const message = this.todoService.delete(Number(id));
        const todos = await this.todoService.findAll();
        return { title: 'ToDo List', todos, message };
    }
}