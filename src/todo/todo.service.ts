import { Inject, Injectable } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './todo.entity';
import { ObjectId } from 'mongodb';
import { UpdateTodoDto } from './dto/update-todo.dto';

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

  async update(
    todoId: string,
    updateTodoDto: UpdateTodoDto,
  ): Promise<UpdateResult> {
    const updatedTodo = await this.todoRepository.update(todoId, updateTodoDto);
    return updatedTodo;
  }
}
