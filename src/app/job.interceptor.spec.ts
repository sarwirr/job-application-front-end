import { TestBed } from '@angular/core/testing';

import { JobInterceptor } from './job.interceptor';

describe('JobInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JobInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: JobInterceptor = TestBed.inject(JobInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
