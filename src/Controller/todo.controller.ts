import { Body, Controller, Delete, Get, Param, Post, Put, Render } from "@nestjs/common";
import { TodoService } from "src/Services/todo.service";
import { threadId } from "worker_threads";

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
        return { title: 'ToDo Details', todo}
    }

    @Post()
    @Render('index')
    create(@Body() body) {
        const message = this.todoService.create(body.title, body.dueDate, body.description);
        return { message, todos: this.todoService.findAll() };
    }

    @Put(':id')
    @Render('index')
    update(@Param('id') id: string, @Body() body) {
        this.todoService.update(Number(id), body.title, body.dueDate, body.description);
        return { title: 'ToDo List', todos: this.todoService.findAll() };
    }

    @Delete(':id')
    @Render('index')
    delete(@Param('id') id: string) {
        this.todoService.delete(Number(id));
        return { title: 'ToDo List', todos: this.todoService.findAll() };
    }
}