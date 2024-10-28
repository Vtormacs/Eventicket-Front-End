import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosPaginaAdminComponent } from './eventos-pagina-admin.component';

describe('EventosPaginaAdminComponent', () => {
  let component: EventosPaginaAdminComponent;
  let fixture: ComponentFixture<EventosPaginaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventosPaginaAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventosPaginaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
