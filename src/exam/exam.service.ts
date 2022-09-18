import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class ExamService {
  constructor(private readonly prismaService: PrismaService) {}
}
