import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResterComponent } from './rester.component';

describe('ResterComponent', () => {
  let component: ResterComponent;
  let fixture: ComponentFixture<ResterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
