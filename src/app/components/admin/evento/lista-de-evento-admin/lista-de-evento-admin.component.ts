import { Component } from '@angular/core';
import { Categoria } from '../../../../models/categoria';
import { Endereco } from '../../../../models/endereco';
import { Evento } from '../../../../models/evento';
import { NovoEventoComponent } from "../../botoes/novo-evento/novo-evento.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-de-evento-admin',
  standalone: true,
  imports: [CommonModule, RouterLink, NovoEventoComponent],
  templateUrl: './lista-de-evento-admin.component.html',
  styleUrl: './lista-de-evento-admin.component.scss',
})
export class ListaDeEventoAdminComponent {
  lista: Evento[] = [];

  constructor() {
    const endereco1 = new Endereco(1, 'São Paulo', 'São Paulo', 'Rua A', '100');
    const endereco2 = new Endereco(
      2,
      'Rio de Janeiro',
      'Rio de Janeiro',
      'Rua B',
      '200'
    );
    const endereco3 = new Endereco(
      3,
      'Belo Horizonte',
      'Minas Gerais',
      'Rua C',
      '300'
    );

    const endereco4 = new Endereco(4, 'Curitiba', 'Paraná', 'Avenida D', '400');

    const endereco5 = new Endereco(5, 'Salvador', 'Bahia', 'Rua E', '500');

    const endereco6 = new Endereco(6, 'Fortaleza', 'Ceará', 'Praça F', '600');

    const categoriaMusica = new Categoria(1, 'Música');
    const categoriaEsporte = new Categoria(2, 'Esporte');
    const categoriaTeatro = new Categoria(3, 'Teatro');
    const categoriaCultura = new Categoria(4, 'Cultura');
    const categoriaCinema = new Categoria(5, 'Cinema');
    const categoriaComedia = new Categoria(6, 'Comédia');

    this.lista.push(
      new Evento(
        1,
        'Concerto de Rock',
        150,
        300,
        new Date('2024-11-01'),
        'Show de rock ao vivo',
        endereco1,
        new Set([categoriaMusica])
      ),
      new Evento(
        2,
        'Jogo de Futebol',
        100,
        500,
        new Date('2024-12-15'),
        'Partida entre grandes times',
        endereco2,
        new Set([categoriaEsporte])
      ),
      new Evento(
        3,
        'Peça de Teatro',
        80,
        200,
        new Date('2024-11-20'),
        'Espetáculo teatral imperdível',
        endereco3,
        new Set([categoriaTeatro])
      ),
      // Novos eventos
      new Evento(
        4,
        'Festival de Música',
        200,
        1000,
        new Date('2024-12-05'),
        'Festival com diversas bandas e artistas',
        endereco4,
        new Set([categoriaMusica])
      ),
      new Evento(
        5,
        'Cine Arte',
        50,
        150,
        new Date('2024-11-10'),
        'Exibição de filmes clássicos',
        endereco5,
        new Set([categoriaCinema])
      ),
      new Evento(
        6,
        'Stand-up Comedy',
        75,
        300,
        new Date('2024-11-25'),
        'Show de comédia ao vivo',
        endereco6,
        new Set([categoriaComedia])
      )
    );
  }

  deletar() {}
}
