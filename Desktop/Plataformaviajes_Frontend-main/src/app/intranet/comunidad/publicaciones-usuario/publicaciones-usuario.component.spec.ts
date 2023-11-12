import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesUsuarioComponent } from './publicaciones-usuario.component';

describe('PublicacionesUsuarioComponent', () => {
  let component: PublicacionesUsuarioComponent;
  let fixture: ComponentFixture<PublicacionesUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicacionesUsuarioComponent]
    });
    fixture = TestBed.createComponent(PublicacionesUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
