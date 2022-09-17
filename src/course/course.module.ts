import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { PrismaModule } from '../prisma/prisma.module';
import { CourseController } from './course.controller';

@Module({
  imports: [PrismaModule],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
