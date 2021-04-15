import { TestBed } from '@angular/core/testing';

import { YtdlService } from './ytdl.service';

describe('YtdlService', () => {
  let service: YtdlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YtdlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
