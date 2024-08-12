import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaderoterapyComponent } from './maderoterapy.component';

describe('MaderoterapyComponent', () => {
  let component: MaderoterapyComponent;
  let fixture: ComponentFixture<MaderoterapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaderoterapyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaderoterapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
