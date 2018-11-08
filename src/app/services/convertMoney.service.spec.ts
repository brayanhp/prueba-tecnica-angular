import { TestBed, async, inject } from '@angular/core/testing';
import { ConvertMoneyService } from './convertMoney.service';

describe('Service: ConvertMoney', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConvertMoneyService]
    });
  });

  it('should ...', inject([ConvertMoneyService], (service: ConvertMoneyService) => {
    expect(service).toBeTruthy();
  }));
});
