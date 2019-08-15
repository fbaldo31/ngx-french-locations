import { TestBed } from '@angular/core/testing';

import { NgxFrenchLocationService } from './ngx-french-location.service';

describe('NgxFrenchLocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxFrenchLocationService = TestBed.get(NgxFrenchLocationService);
    expect(service).toBeTruthy();
  });
  it('should get cities in Haute-Garonne', () => {
    const service: NgxFrenchLocationService = TestBed.get(NgxFrenchLocationService);
    service.getCitiesByCounty(31).subscribe(res => {
      expect(res).toBeTruthy();
    });
  });
  it('should get countites', () => {
    const service: NgxFrenchLocationService = TestBed.get(NgxFrenchLocationService);
    service.getCounties().subscribe(res => expect(res).toBeTruthy());
  });
  it('should get districts', () => {
    const service: NgxFrenchLocationService = TestBed.get(NgxFrenchLocationService);
    service.getDistrics().subscribe(res => expect(res).toBeTruthy());
  });
});
