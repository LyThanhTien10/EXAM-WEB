import { Module } from '@nestjs/common'
import { SectionService } from './section.service'
import { PrismaModule } from '../prisma/prisma.module'
import { SectionController } from './section.controller'

@Module({
  imports: [PrismaModule],
  controllers: [SectionController],
  providers: [SectionService],
})
export class SectionModule {}
