import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { HeaderComponent } from '../header/header.component';
import { ListaDeEventoComponent } from "../../evento/lista-de-evento/lista-de-evento.component";

@Component({
  selector: 'app-principal-pagina',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, HeaderComponent, ListaDeEventoComponent],
  templateUrl: './principal-pagina.component.html',
  styleUrl: './principal-pagina.component.scss'
})
export class PrincipalPaginaComponent {

}
