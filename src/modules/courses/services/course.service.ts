import { ICourseService } from './course-service.interface';

export class CourseService implements ICourseService {
  constructor(
    @Inject(COURSE_REPOSITORY)
    private readonly courseRepository: Repository<CourseEntity>,
  ) {}
}
