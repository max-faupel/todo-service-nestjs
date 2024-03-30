import { IsBoolean, IsDateString, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  description: string;
  @IsBoolean()
  done: boolean;
  @IsDateString()
  targetDate: Date;
}
