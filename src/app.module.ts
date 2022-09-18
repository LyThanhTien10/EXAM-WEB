import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { PrismaModule } from './prisma/prisma.module'
import { CourseModule } from './course/course.module'
import { UserModule } from './user/user.module'
import { ConfigModule } from '@nestjs/config'
import * as Joi from '@hapi/joi'

@Module({
  imports: [
    PrismaModule,
    CourseModule,
    UserModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        PORT: Joi.number(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
