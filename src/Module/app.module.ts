import { Module } from '@nestjs/common';
import { TodoModule } from './todo.module';
import { TodoController } from 'src/Controller/todo.controller';
import { TodoService } from 'src/Services/todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from 'src/typeorm/ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig),TodoModule],
  controllers: [TodoController],
  providers: [TodoService],
})
export class AppModule {}
