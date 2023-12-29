import { ObjectId } from 'mongodb';
import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'todos' })
export class Todo {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  description: string;

  @Column()
  done: boolean;

  @Column()
  targetDate: Date;
}
