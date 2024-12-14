export class Todo {
    id: number;
    title: string;
    description?: string;
    dueDate: string;

    constructor(id: number, title: string, dueDate: string, description?: string) {
        this.id = id;
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.dueDate = dueDate;
    }
}