import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/createCourse.dto';
import { UpdateCourseDto } from './dto/updateCourse.dto';
import { FindOneParams } from 'src/utils/findOneParams';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Course')
@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  async getCoures() {
    return this.courseService.getCoures();
  }

  @Get(':id')
  getCourseById(@Param() { id }: FindOneParams) {
    return this.courseService.getCourseById(Number(id));
  }

  @Post()
  async createCourse(@Body() course: CreateCourseDto) {
    return this.courseService.createCourse(course);
  }

  @Put(':id')
  async updatePost(
    @Param() { id }: FindOneParams,
    @Body() course: UpdateCourseDto,
  ) {
    return this.courseService.updateCourse(Number(id), course);
  }

  @Delete(':id')
  async deletePost(@Param() { id }: FindOneParams) {
    return this.courseService.deleteCourse(Number(id));
  }
}
