import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { RegisterDto } from './dto/register.dto'
import { LoginDto } from './dto/login.dto'
import { CourseArrayDto } from './dto/courseArray.dto'

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}
  async register(user: RegisterDto) {}

  async verifyUser(token: string) {}

  async login(user: LoginDto) {}

  async updateCourseForUser(userId: string, courses: CourseArrayDto) {}
}
