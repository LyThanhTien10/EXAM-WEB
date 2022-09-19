import { Controller } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Crud, CrudController } from '@nestjsx/crud'
import Course from './course.entity'
import { CourseService } from './course.service'

/* NestJSX
 */
@ApiTags('Courses')
@Crud({
  model: {
    type: Course,
  },
})
@Controller('courses')
export class CourseController implements CrudController<Course> {
  constructor(public service: CourseService) {}
}
