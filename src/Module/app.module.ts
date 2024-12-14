import { Module } from '@nestjs/common';
import { AppController } from '../Controller/app.controller';
import { AppService } from '../Services/app.service';
import { TodoModule } from './todo.module';
import { TodoController } from 'src/Controller/todo.controller';
import { TodoService } from 'src/Services/todo.service';

@Module({
  imports: [TodoModule],
  controllers: [TodoController],
  providers: [AppService, TodoService],
})
export class AppModule {}
