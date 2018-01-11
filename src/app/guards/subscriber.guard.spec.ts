import { TestBed, async, inject } from '@angular/core/testing';

import { SubscriberGuard } from './subscriber.guard';

describe('SubscriberGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubscriberGuard]
    });
  });

  it('should ...', inject([SubscriberGuard], (guard: SubscriberGuard) => {
    expect(guard).toBeTruthy();
  }));
});
