import { TestBed, inject } from '@angular/core/testing';

import { GettilesService } from './gettiles.service';

describe('GettilesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GettilesService]
    });
  });

  it('should be created', inject([GettilesService], (service: GettilesService) => {
    expect(service).toBeTruthy();
  }));
});
