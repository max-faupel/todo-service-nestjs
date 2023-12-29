import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './todo.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class TodoService {
  constructor(
    @Inject('TODO_REPOSITORY')
    private todoRepository: Repository<Todo>,
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = await this.todoRepository.save(createTodoDto);
    return createdTodo;
  }

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async findOne(todoId: string): Promise<Todo> {
    return this.todoRepository.findOneBy({ _id: new ObjectId(todoId) });
  }
}
