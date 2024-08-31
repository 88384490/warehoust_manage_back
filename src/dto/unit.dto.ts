import { IsString } from 'class-validator';

export class Unit {
  @IsString()
  name: string;
  @IsString()
  create_time: string;
  @IsString()
  update_time: string;
}
