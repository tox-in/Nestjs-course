import { Injectable } from '@nestjs/common';
import { Todo } from 'src/Models/todo.model';

@Injectable()
export class TodoService {
    private todos: Todo[] = [
        new Todo(1, 'Learn NestJS', 'Explore the basics of NestJS'),
        new Todo(2, 'Develop MVC App', 'Build an applicattion using the MVC pattern'),
    ];

    findAll(): Todo[] {
        return this.todos; 
    }
}
