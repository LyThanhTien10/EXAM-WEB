import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { CourseNotFoundException } from './exceptions/postNotFound.exception'
import { CreateCourseDto } from './dto/createCourse.dto'
import { PrismaError } from '../utils/prismaError'
import { UpdateCourseDto } from './dto/updateCourse.dto'

@Injectable()
export class CourseService {
  constructor(private readonly prismaService: PrismaService) {}

  async getCoures() {
    return this.prismaService.course.findMany()
  }

  async getCourseById(id: string) {
    const course = await this.prismaService.course.findUnique({
      where: {
        id,
      },
    })
    if (!course) {
      throw new CourseNotFoundException(id)
    }
    return course
  }

  async createCourse(course: CreateCourseDto) {
    return this.prismaService.course.create({
      data: course,
    })
  }

  async deleteCourse(id: string) {
    try {
      return this.prismaService.course.delete({
        where: {
          id,
        },
      })
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === PrismaError.RecordDoesNotExist
      ) {
        throw new CourseNotFoundException(id)
      }
      throw error
    }
  }

  async updateCourse(id: string, course: UpdateCourseDto) {
    try {
      return await this.prismaService.course.update({
        data: {
          ...course,
          id: undefined,
        },
        where: {
          id,
        },
      })
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === PrismaError.RecordDoesNotExist
      ) {
        throw new CourseNotFoundException(id)
      }
      throw error
    }
  }

  // ...
}
