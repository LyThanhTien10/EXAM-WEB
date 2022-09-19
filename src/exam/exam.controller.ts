import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common'
import { ExamService } from './exam.service'
import { ApiBody, ApiTags } from '@nestjs/swagger'
import { CreateExamDto } from './dto/createExam.dto'

@ApiTags('Exam')
@Controller('exams')
export class ExamController {
  constructor() {}
}
