import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPaginaComponent } from './login-pagina.component';

describe('LoginPaginaComponent', () => {
  let component: LoginPaginaComponent;
  let fixture: ComponentFixture<LoginPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPaginaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
