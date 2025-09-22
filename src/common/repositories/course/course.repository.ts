import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere } from 'typeorm';
import { CourseEntity } from 'src/common/entities/course.entity';
import { ICourseRepository } from './course-repository.interface';

@Injectable()
export class CourseRepository implements ICourseRepository {
  constructor(
    @InjectRepository(CourseEntity)
    private readonly repository: Repository<CourseEntity>,
  ) {}

  async create(course: CourseEntity): Promise<CourseEntity> {
    const entity = this.repository.create(course);
    return await this.repository.save(entity);
  }

  async find(where: FindOptionsWhere<CourseEntity>): Promise<CourseEntity> {
    return await this.repository.findOneBy(where);
  }

  async update(id: string, course: CourseEntity): Promise<CourseEntity> {
    await this.repository.update({ id }, course);
    const updated = await this.repository.findOneBy({ id });
    return updated as CourseEntity;
  }
}
