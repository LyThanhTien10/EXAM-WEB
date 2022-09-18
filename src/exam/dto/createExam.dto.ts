import { IsString, IsNotEmpty, IsNumber } from 'class-validator'

export class CreateExamDto {
  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  @IsNotEmpty()
  type: string

  @IsNumber()
  @IsNotEmpty()
  duration: number
}
