import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEventoModalComponent } from './editar-evento-modal.component';

describe('EditarEventoModalComponent', () => {
  let component: EditarEventoModalComponent;
  let fixture: ComponentFixture<EditarEventoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarEventoModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarEventoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
