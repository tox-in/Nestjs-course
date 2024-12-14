import { Injectable } from '@nestjs/common';
import { Todo } from 'src/Models/todo.model';

@Injectable()
export class TodoService {
    private todos: Todo[] = [
        new Todo(1, 'Learn NestJS', '2023-09-01', 'Explore the basics of NestJS'),
        new Todo(2, 'Develop MVC App', '2023-10-01', 'Build an applicattion using the MVC pattern'),
        new Todo(3, 'Study Node.js', '2023-11-01', 'Deep dive into Node.js fundamentals'),
        new Todo(4, 'Review TypeScript', '2023-12-01', 'Brush up on TypeScript essentials')
    ];

    findAll(): Todo[] {
        return this.todos; 
    }

    findOne(id: number): Todo | undefined {
        return this.todos.find(todo => todo.id === id);
    }
}
