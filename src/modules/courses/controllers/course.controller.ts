import { Controller, Inject } from '@nestjs/common';

@Controller('/courses')
export class CourseController {
  constructor(
    @Inject(COURSE_SERVICE) private readonly courseService: CourseService,
  ) {}
}
