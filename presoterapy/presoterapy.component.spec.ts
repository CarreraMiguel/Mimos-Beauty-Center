import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresoterapyComponent } from './presoterapy.component';

describe('PresoterapyComponent', () => {
  let component: PresoterapyComponent;
  let fixture: ComponentFixture<PresoterapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresoterapyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresoterapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
