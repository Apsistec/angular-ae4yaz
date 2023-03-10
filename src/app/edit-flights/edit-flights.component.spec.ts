import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFlightsComponent } from './edit-flights.component';

describe('EditFlightsComponent', () => {
  let component: EditFlightsComponent;
  let fixture: ComponentFixture<EditFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
