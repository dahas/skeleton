import { TestBed, async, inject } from '@angular/core/testing';

import { CanViewContentGuard } from './can-view-content.guard';

describe('CanViewContentGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanViewContentGuard]
    });
  });

  it('should ...', inject([CanViewContentGuard], (guard: CanViewContentGuard) => {
    expect(guard).toBeTruthy();
  }));
});
