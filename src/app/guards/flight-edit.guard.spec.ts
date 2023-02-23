import { TestBed } from '@angular/core/testing';

import { FlightEditGuard } from './flight-edit.guard';

describe('FlightEditGuard', () => {
  let guard: FlightEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FlightEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
