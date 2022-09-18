import { IsArray } from 'class-validator'

export class CourseArrayDto {
  @IsArray()
  courses: [string]
}
