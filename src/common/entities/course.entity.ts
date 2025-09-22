import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('courses')
export class CourseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'titulo', type: 'varchar' })
  titulo: string;

  @Column({ name: 'descricao', type: 'varchar' })
  descricao: string;

  @Column({ name: 'carga_horaria', type: 'integer' })
  cargaHoraria: number;

  @Column({ name: 'instrutor', type: 'varchar' })
  instrutor: string;

  @Column({ name: 'data_cadastro', type: 'timestamp' })
  dataCadastro: Date;
}
