import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';


@Component({
  selector: 'app-novo-evento-modal',
  standalone: true,
  imports: [MdbFormsModule],
  templateUrl: './novo-evento-modal.component.html',
  styleUrl: './novo-evento-modal.component.scss',
})
export class NovoEventoModalComponent {
  constructor(public modalRef: MdbModalRef<NovoEventoModalComponent>) {}
}
