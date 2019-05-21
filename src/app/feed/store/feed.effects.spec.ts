import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FeedEffects } from './feed.effects';

describe('FeedEffects', () => {
  let actions$: Observable<any>;
  let effects: FeedEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FeedEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(FeedEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
