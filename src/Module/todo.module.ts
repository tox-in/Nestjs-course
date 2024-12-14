import { Module } from "@nestjs/common";
import { TodoController } from "src/Controller/todo.controller";
import { TodoService } from "src/Services/todo.service";

@Module({
    controllers: [TodoController],
    providers: [TodoService],
})
export class TodoModule {}