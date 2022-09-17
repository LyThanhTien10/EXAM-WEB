import { NotFoundException } from '@nestjs/common';

export class CourseNotFoundException extends NotFoundException {
  constructor(courseId: number) {
    super(`Course with id ${courseId} not found`);
  }
}
