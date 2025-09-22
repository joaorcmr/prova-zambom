import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('courses')
export class CourseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'titulo', type: 'varchar' })
  titulo: string;

  @Column({ name: 'descricao', type: 'text' })
  descricao: string;

  @Column({ name: 'cargaHoraria', type: 'integer' })
  cargaHoraria: number;

  @Column({ name: 'instrutor', type: 'varchar' })
  instrutor: string;

  @Column({ name: 'dataCadastro', type: 'timestamptz' })
  dataCadastro: Date;
}
