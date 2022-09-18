import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common'
import { CourseService } from './course.service'
import { CreateCourseDto } from './dto/createCourse.dto'
import { UpdateCourseDto } from './dto/updateCourse.dto'
import { ApiBody, ApiTags } from '@nestjs/swagger'

@ApiTags('Course')
@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  async getCoures() {
    return this.courseService.getCoures()
  }

  @Get(':id')
  getCourseById(@Param('id') id: string) {
    return this.courseService.getCourseById(id)
  }

  @Post()
  async createCourse(@Body() course: CreateCourseDto) {
    return this.courseService.createCourse(course)
  }

  @Put(':id')
  async updatePost(@Param() id: string, @Body() course: UpdateCourseDto) {
    return this.courseService.updateCourse(id, course)
  }

  @Delete(':id')
  async deletePost(@Param() id: string) {
    return this.courseService.deleteCourse(id)
  }
}
