export class CreateCourseRequestDTO {
  titulo: string;
  descricao: string;
  cargaHoraria: number;
  instrutor: string;
  dataCadastro: Date;
}
export class CreateCourseResponseDTO {
  id: string;
  titulo: string;
  descricao: string;
  cargaHoraria: number;
  instrutor: string;
  dataCadastro: Date;
}
