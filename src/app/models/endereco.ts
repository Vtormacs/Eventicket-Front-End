export class Endereco {
  id: number;
  estado: string;
  cidade: string;
  rua: string;
  numero: string;

  constructor(
    id: number,
    estado: string,
    cidade: string,
    rua: string,
    numero: string
  ) {
    this.id = id;
    this.estado = estado;
    this.cidade = cidade;
    this.rua = rua;
    this.numero = numero;
  }
}
