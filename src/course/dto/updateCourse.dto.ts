import { IsString, IsNotEmpty, IsNumber } from 'class-validator'

export class UpdateCourseDto {
  @IsNumber()
  id: number

  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  @IsNotEmpty()
  status: string

  @IsString()
  @IsNotEmpty()
  totalExam: number
}
