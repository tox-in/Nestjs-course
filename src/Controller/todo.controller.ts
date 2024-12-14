import { Controller, Get, Render } from "@nestjs/common";
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
}