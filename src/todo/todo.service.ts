import { Injectable } from '@nestjs/common';
import { Todo } from './todo';

@Injectable()
export class TodoService {
  todoList: Todo[] = [
    new Todo(1, 'max', 'Learn Angular', false, new Date()),
    new Todo(2, 'max', 'Learn Kafka', false, new Date()),
    new Todo(3, 'max', 'Learn Reactive Programming', false, new Date()),
  ];

  getTodos(): Todo[] {
    return this.todoList;
  }
}
