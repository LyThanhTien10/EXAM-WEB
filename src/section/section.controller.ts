import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common'
import { SectionService } from './section.service'
import { ApiBody, ApiTags } from '@nestjs/swagger'
import { CreateSectionDto } from './dto/createSection.dto'

@ApiTags('Section')
@Controller('sections')
export class SectionController {
  constructor(private readonly sectionService: SectionService) {}

  @Get()
  async getSectionByCourseId(@Query('courseId') courseId: string) {
    return
  }

  @Post()
  async createSection(@Query('courseId') courseId: string, @Body() section: CreateSectionDto) {
    return
  }
}
