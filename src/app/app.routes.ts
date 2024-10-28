import { Routes } from '@angular/router';
import { LoginPaginaComponent } from './components/layout/login-pagina/login-pagina.component';
import { PrincipalPaginaComponent } from './components/layout/principal-pagina/principal-pagina.component';
import { EventosPaginaAdminComponent } from './components/admin/eventos-pagina-admin/eventos-pagina-admin.component';
import { ListaDeEventoComponent } from './components/evento/lista-de-evento/lista-de-evento.component';
import { ListaDeEventoAdminComponent } from './components/admin/evento/lista-de-evento-admin/lista-de-evento-admin.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPaginaComponent },
  { path: 'pagina-principal', component: PrincipalPaginaComponent },
  {
    path: 'admin',
    component: EventosPaginaAdminComponent,
    children: [
      { path: 'eventos-admin', component: ListaDeEventoAdminComponent },
    ],
  },
];
