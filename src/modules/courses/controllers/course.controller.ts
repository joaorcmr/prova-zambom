import { Controller, Inject } from '@nestjs/common';
import {
  COURSE_SERVICE,
  ICourseService,
} from '../services/course-service.interface';

@Controller('/courses')
export class CourseController {
  constructor(
    @Inject(COURSE_SERVICE) private readonly courseService: ICourseService,
  ) {}
}
