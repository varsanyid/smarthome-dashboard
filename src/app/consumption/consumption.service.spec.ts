import { ConsumptionService } from './consumption.service';

describe('ConsumptionService', () => {
  let consumptionService: ConsumptionService;

  beforeEach(() => consumptionService = new ConsumptionService());

  it('should be created', () => {
    expect(consumptionService).toBeTruthy();
  });

  it('should convert w to kwh correctly', () => {
    expect(consumptionService.convertWtokWh(375)).toBe(0.375);
  });

});
