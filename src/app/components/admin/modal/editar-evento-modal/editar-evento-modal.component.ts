import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@Component({
  selector: 'app-editar-evento-modal',
  standalone: true,
  imports: [MdbFormsModule],
  templateUrl: './editar-evento-modal.component.html',
  styleUrl: './editar-evento-modal.component.scss',
})
export class EditarEventoModalComponent {
  constructor(public modalRef: MdbModalRef<EditarEventoModalComponent>) {}
}
