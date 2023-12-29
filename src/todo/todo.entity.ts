import { Entity, Column, ObjectIdColumn, ObjectId } from 'typeorm';

@Entity({ name: 'todos' })
export class Todo {
  @ObjectIdColumn({ name: '_id' })
  id: ObjectId;

  @Column()
  description: string;

  @Column()
  done: boolean;

  @Column()
  targetDate: Date;
}
