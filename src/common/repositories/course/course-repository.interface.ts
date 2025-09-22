import { CourseEntity } from 'src/common/entities/course.entity';
import { FindOptionsWhere } from 'typeorm';

export const COURSE_REPOSITORY = Symbol('COURSE_REPOSITORY');
export interface ICourseRepository {
  create(course: CourseEntity): Promise<CourseEntity>;
  find(where: FindOptionsWhere<CourseEntity>): Promise<CourseEntity>;
  update(id: string, course: CourseEntity): Promise<CourseEntity>;
}
