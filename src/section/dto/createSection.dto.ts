import { IsString, IsNotEmpty } from 'class-validator'

export class CreateSectionDto {
  @IsString()
  @IsNotEmpty()
  title: string
}
