import { Controller, Get, Param, Render } from "@nestjs/common";
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
}