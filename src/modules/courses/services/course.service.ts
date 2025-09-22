import { Inject, Injectable } from '@nestjs/common';
import { ICourseService } from './course-service.interface';
import {
  COURSE_REPOSITORY,
  ICourseRepository,
} from 'src/common/repositories/course/course-repository.interface';
import { CourseEntity } from 'src/common/entities/course.entity';
import { Repository } from 'typeorm';
import {
  CreateCourseRequestDTO,
  CreateCourseResponseDTO,
} from '../../courses/dtos/create-course.dto';
import { GetCourseResponseDTO } from '../../courses/dtos/get-course.dto';
import {
  UpdateCourseRequestDTO,
  UpdateCourseResponseDTO,
} from '../../courses/dtos/update-course.dto';

@Injectable()
export class CourseService implements ICourseService {
  constructor(
    @Inject(COURSE_REPOSITORY)
    private readonly courseRepository: ICourseRepository,
  ) {}

  async createCourse(
    course: CreateCourseRequestDTO,
  ): Promise<CreateCourseResponseDTO> {
    const toCreate: CourseEntity = {
      id: undefined as unknown as string,
      titulo: course.titulo,
      descricao: course.descricao,
      cargaHoraria: course.cargaHoraria,
      instrutor: course.instrutor,
      dataCadastro: course.dataCadastro ?? new Date(),
    };
    const created = await this.courseRepository.create(toCreate);
    return {
      id: created.id,
      titulo: created.titulo,
      descricao: created.descricao,
      cargaHoraria: created.cargaHoraria,
      instrutor: created.instrutor,
      dataCadastro: created.dataCadastro,
    };
  }

  async getCourse(id: string): Promise<GetCourseResponseDTO> {
    const found = await this.courseRepository.find({ id });
    return {
      id: found.id,
      titulo: found.titulo,
      descricao: found.descricao,
      cargaHoraria: found.cargaHoraria,
      instrutor: found.instrutor,
      dataCadastro: found.dataCadastro,
    };
  }

  async updateCourse(
    id: string,
    course: UpdateCourseRequestDTO,
  ): Promise<UpdateCourseResponseDTO> {
    const toUpdate: CourseEntity = {
      id,
      titulo: course.titulo as string,
      descricao: course.descricao as string,
      cargaHoraria: course.cargaHoraria as number,
      instrutor: course.instrutor as string,
      dataCadastro: undefined as unknown as Date,
    };
    const updated = await this.courseRepository.update(id, toUpdate);
    return {
      id: updated.id,
      titulo: updated.titulo,
      descricao: updated.descricao,
      cargaHoraria: updated.cargaHoraria,
      instrutor: updated.instrutor,
      dataCadastro: updated.dataCadastro,
    };
  }
}
