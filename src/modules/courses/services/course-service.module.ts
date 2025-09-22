import { Module } from '@nestjs/common';
import { CourseRepositoryModule } from 'src/common/repositories/course/course-repository.module';
import { COURSE_SERVICE } from './course-service.interface';
import { useClass } from 'src/common/helpers/use-class.helper';
import { CourseService } from './course.service';

@Module({
  imports: [CourseRepositoryModule],
  providers: [useClass(COURSE_SERVICE, CourseService)],
  exports: [COURSE_SERVICE],
})
export class CourseServiceModule {}
