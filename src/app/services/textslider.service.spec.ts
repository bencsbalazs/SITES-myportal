import { TestBed, inject } from '@angular/core/testing';

import { TextsliderService } from './textslider.service';

describe('TextsliderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextsliderService]
    });
  });

  it('should be created', inject([TextsliderService], (service: TextsliderService) => {
    expect(service).toBeTruthy();
  }));
});
