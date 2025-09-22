import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { useClass } from 'src/common/helpers/use-class.helper';
import { CourseEntity } from 'src/common/entities/course.entity';
import { COURSE_REPOSITORY } from './course-repository.interface';
import { CourseRepository } from './course.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CourseEntity])],
  providers: [useClass(COURSE_REPOSITORY, CourseRepository)],
  exports: [COURSE_REPOSITORY],
})
export class CourseRepositoryModule {}
