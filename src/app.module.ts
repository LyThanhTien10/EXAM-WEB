import { Module } from '@nestjs/common'
import { AppController } from './app.controller'

import { UserModule } from './user/user.module'
import { CourseModule } from './course/course.module'
import { SectionModule } from './section/section.module'
import { ExamModule } from './exam/exam.module'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import { DatabaseModule } from './database/database.module'
import * as Joi from '@hapi/joi'

@Module({
  imports: [
    UserModule,
    CourseModule,
    SectionModule,
    ExamModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION_TIME: Joi.string().required(),
      }),
    }),
    AuthModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
