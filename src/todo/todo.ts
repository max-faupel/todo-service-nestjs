export class Todo {
  id: number;
  username: string;
  description: string;
  done: boolean;
  targetDate: Date;

  constructor(
    id: number,
    username: string,
    description: string = '',
    done: boolean = false,
    targetDate: Date,
  ) {
    this.id = id;
    this.username = username;
    this.description = description;
    this.done = done;
    this.targetDate = targetDate;
  }
}
