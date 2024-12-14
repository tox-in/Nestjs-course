import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TodoController } from "src/Controller/todo.controller";
import { Todo } from "src/Models/todo.entity";
import { TodoService } from "src/Services/todo.service";

@Module({
    imports: [TypeOrmModule.forFeature([Todo])],
    providers: [TodoService],
    controllers: [TodoController],
  })
  export class TodoModule {}