import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgUsuarioComponent } from './msg-usuario.component';

describe('MsgUsuarioComponent', () => {
  let component: MsgUsuarioComponent;
  let fixture: ComponentFixture<MsgUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsgUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsgUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
