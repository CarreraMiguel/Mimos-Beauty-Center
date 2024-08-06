import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyelashComponent } from './eyelash.component';

describe('EyelashComponent', () => {
  let component: EyelashComponent;
  let fixture: ComponentFixture<EyelashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EyelashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EyelashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
