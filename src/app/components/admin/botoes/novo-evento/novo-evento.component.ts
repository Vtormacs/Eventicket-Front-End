import { Component } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { NovoEventoModalComponent } from '../../modal/novo-evento-modal/novo-evento-modal.component';

@Component({
  selector: 'app-novo-evento',
  standalone: true,
  imports: [],
  providers: [MdbModalService],
  templateUrl: './novo-evento.component.html',
  styleUrl: './novo-evento.component.scss',
})
export class NovoEventoComponent {
  modalRef: MdbModalRef<NovoEventoModalComponent> | null = null;

  constructor(private modalService: MdbModalService) {}

  openModal() {
    this.modalRef = this.modalService.open(NovoEventoModalComponent, {
      modalClass: 'modal-dialog-centered',
    });
  }
}
