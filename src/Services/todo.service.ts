import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { log } from 'console';
import { CreateTodoDto } from 'src/dto/CreateTodoDto';
import { Todo } from 'src/Models/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private readonly todoRepository: Repository<Todo>,
    ) {
        this.logDatabaseIntegration();
    }

    findAll(): Promise<Todo[]> {
        return this.todoRepository.find(); 
    }

    findOne(id: number): Promise<Todo | undefined> {
        return this.todoRepository.findOne({ where: { id: id } });
    }

    async create(createTodoDto: CreateTodoDto): Promise<string> {
        const existingTodo = await this.todoRepository.findOne({ where: { title: createTodoDto.title}});
        
        if(existingTodo) {
            return `A Todo item with title "${createTodoDto.title}" already exists.`;
        }

        const todo = this.todoRepository.create(createTodoDto);
        await this.todoRepository.save(todo);
        console.log(`Todo created with title: ${createTodoDto.title}`);
        return 'Todo created successfully!';
    }


    async update(id: number, title: string, description?: string): Promise<string> {
        const todo = await this.todoRepository.findOne({ where: { id } });

        if(!todo) {
            return `Todo with ID ${id} not found.`;
        }

        todo.title = title;
        todo.description = description;
        
        await this.todoRepository.save(todo);
        console.log(`Todo with ID ${id} updated successfully.`);
        return `Todo with ID ${id} updated successfully`
        
    }

    async delete(id: number): Promise<string> {
        const todo = await this.todoRepository.findOne({ where: { id } });

        if(!todo) {
            return `Todo with ID ${id} not found.`;
        }

        await this.todoRepository.remove(todo);
        console.log('Todo with ID ${id} deleted successfully');
        return `Todo with Todo with ID ${id} deleted successfully.`;
        
    }


    private logDatabaseIntegration() {
        console.log('Database integration has been successfully established.');
        
    }
}
