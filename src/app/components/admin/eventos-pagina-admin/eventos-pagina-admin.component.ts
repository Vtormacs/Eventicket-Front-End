import { Component } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-eventos-pagina-admin',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, HeaderComponent, RouterOutlet],
  templateUrl: './eventos-pagina-admin.component.html',
  styleUrl: './eventos-pagina-admin.component.scss',
})
export class EventosPaginaAdminComponent {}
