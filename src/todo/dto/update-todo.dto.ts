import { IsBoolean, IsDateString, IsOptional, IsString } from 'class-validator';

export class UpdateTodoDto {
  @IsString()
  @IsOptional()
  description: string;
  @IsBoolean()
  @IsOptional()
  done: boolean;
  @IsDateString()
  @IsOptional()
  targetDate: Date;
}
