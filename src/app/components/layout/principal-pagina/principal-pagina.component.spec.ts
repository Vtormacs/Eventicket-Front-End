import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalPaginaComponent } from './principal-pagina.component';

describe('PrincipalPaginaComponent', () => {
  let component: PrincipalPaginaComponent;
  let fixture: ComponentFixture<PrincipalPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalPaginaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrincipalPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
