import { Module } from '@nestjs/common';
import { COURSE_SERVICE } from './course-service.interface';
import { useClass } from 'src/common/helpers/use-class.helper';
import { CourseService } from './course.service';

@Module({
  providers: [useClass(COURSE_SERVICE, CourseService)],
  exports: [COURSE_SERVICE],
})
export class CourseServiceModule {}
