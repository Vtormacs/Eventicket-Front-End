import { Categoria } from './categoria';
import { Endereco } from './endereco';

export class Evento {
  id: number;
  nome: string;
  precoDoIngresso: number;
  quantidade: number;
  data: Date;
  descricao: string;
  endereco: Endereco;
  categories: Set<Categoria>;

  constructor(
    id: number,
    nome: string,
    precoDoIngresso: number,
    quantidade: number,
    data: Date,
    descricao: string,
    endereco: Endereco,
    categories: Set<Categoria>
  ) {
    this.id = id;
    this.nome = nome;
    this.precoDoIngresso = precoDoIngresso;
    this.quantidade = quantidade;
    this.data = data;
    this.descricao = descricao;
    this.endereco = endereco;
    this.categories = categories;
  }
}
