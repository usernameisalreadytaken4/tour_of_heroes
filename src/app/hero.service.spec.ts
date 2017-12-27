import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService]
    });
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});
