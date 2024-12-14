import { Module } from '@nestjs/common';
import { TodoModule } from './todo.module';
import { TodoController } from 'src/Controller/todo.controller';
import { TodoService } from 'src/Services/todo.service';

@Module({
  imports: [TodoModule],
  controllers: [TodoController],
  providers: [TodoService],
})
export class AppModule {}
