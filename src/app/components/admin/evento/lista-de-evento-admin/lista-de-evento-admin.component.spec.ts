import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeEventoAdminComponent } from './lista-de-evento-admin.component';

describe('ListaDeEventoAdminComponent', () => {
  let component: ListaDeEventoAdminComponent;
  let fixture: ComponentFixture<ListaDeEventoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDeEventoAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaDeEventoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
