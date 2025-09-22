import {
  CreateCourseRequestDTO,
  CreateCourseResponseDTO,
} from '../dtos/create-course.dto';
import { GetCourseResponseDTO } from '../dtos/get-course.dto';
import {
  UpdateCourseRequestDTO,
  UpdateCourseResponseDTO,
} from '../dtos/update-course.dto';

export const COURSE_SERVICE = Symbol('COURSE_SERVICE');
export interface ICourseService {
  createCourse(
    course: CreateCourseRequestDTO,
  ): Promise<CreateCourseResponseDTO>;
  getCourse(id: string): Promise<GetCourseResponseDTO>;
  updateCourse(
    id: string,
    course: UpdateCourseRequestDTO,
  ): Promise<UpdateCourseResponseDTO>;
}
