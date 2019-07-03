import { Injectable } from '@angular/core';
import { LocalStorageService } from '../device-storage.service';
import { ConsumptionService } from '../consumption/consumption.service';
import { Scale } from '../consumption/scale';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor(
    private deviceStorageService: LocalStorageService,
    private consumptionService: ConsumptionService
  ) { }

  public provideAverageUsage(scale: Scale): Array<any> {
    const averageUkUsage = {
      1: 50,
      30: 1400,
      365: 16500
    }

    return [
      {
        'name': 'Average UK',
        'value': averageUkUsage[scale]
      },
      {
        'name': 'You',
        'value': this.consumptionService.getTotalUsage(
          this.deviceStorageService.getDevices(), scale
        )
      }
    ]
  }

  public providePrice = (scale: Scale): number => {
    const totalUsage = this.consumptionService.getTotalUsage(this.deviceStorageService.getDevices(), 1);
    return Math.trunc(this.consumptionService.getEstimatedPriceFor(scale, totalUsage));
  }

  public provideApplianceRate(): Array<any> {
    const applianceRate = this.consumptionService.getApplianceRates(
      this.deviceStorageService.getDevices()
    );
    return [
      {
        'name': 'Electricity',
        'value': applianceRate.electricity
      },
      {
        'name': 'Gas',
        'value': applianceRate.gas
      },
    ]
  }

  private hourGenerator = () => {
    const hours = [];
    for(let i = 1; i < 25; i++) {
      hours.push(i.toString());
    }
    return hours;
  }

  private monthGenerator = () => {
    const date = new Date();
    const time = new Date(date.getTime());
    time.setMonth(date.getMonth() + 1);
    time.setDate(0);
    const days = time.getDate() > date.getDate() ? time.getDate() - date.getDate() : 0;
    const result = [];
    for (let i = 0; i < days; i++) {
      result.push(i.toString());
    }
    return result;
  }

  private yearGenerator = () => {
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'];
  }

  public provideEstimate(scale: Scale): Array<any> {
    const xScaleGenerator = {
      1: this.hourGenerator,
      30: this.monthGenerator,
      365: this.yearGenerator
    }
    const data: Array<any> = this.consumptionService.getEstimateFor(xScaleGenerator[scale], scale, 
      this.deviceStorageService.getDevices()
    );
    const estimate = [{
      name: 'Estimated usage',
      series: []
    }]
    for(let i = 0; i < data.length; i++) {
      estimate[0].series.push({
        name: data[i].date,
        value: Math.trunc(data[i].estimate)
      })
    }
    return estimate;
    }

}
