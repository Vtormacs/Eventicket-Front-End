import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoEventoModalComponent } from './novo-evento-modal.component';

describe('NovoEventoModalComponent', () => {
  let component: NovoEventoModalComponent;
  let fixture: ComponentFixture<NovoEventoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovoEventoModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovoEventoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
