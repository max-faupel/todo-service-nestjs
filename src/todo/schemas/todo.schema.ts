import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TodoDocument = HydratedDocument<Todo>;

@Schema()
export class Todo {
  id: number;
  @Prop()
  description: string;

  @Prop()
  done: boolean;

  @Prop()
  targetDate: Date;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
