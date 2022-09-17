import { IsString, IsNotEmpty } from 'class-validator'

export class CreateCourseDto {
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
