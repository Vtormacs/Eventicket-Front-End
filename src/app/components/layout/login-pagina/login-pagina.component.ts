import { Component, inject } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-pagina',
  standalone: true,
  imports: [MdbFormsModule, MdbTabsModule, FormsModule],
  templateUrl: './login-pagina.component.html',
  styleUrl: './login-pagina.component.scss',
})
export class LoginPaginaComponent {
  email!: string;
  senha!: string;

  router = inject(Router);

  logar() {
    if (this.email == 'admin@gmail.com' && this.senha == 'admin') {
      this.router.navigate(['admin/eventos-admin']);
    }
    if (this.email == 'normal@gmail.com' && this.senha == 'normal') {
      this.router.navigate(['pagina-principal']);
    } else {
      alert('Dados incorretos');
      console.log(this.email);
      console.log(this.senha);
    }
  }
}
