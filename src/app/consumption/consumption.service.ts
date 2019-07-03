import { Injectable } from '@angular/core';
import { Device } from '../device';
import { Scale } from './scale';

@Injectable({
  providedIn: 'root'
})
export class ConsumptionService {

  AVERAGE_UK_PRICE = 0.12376;

  public convertWtokWh(usage: number): number {
    return usage / 1000;
  }

  public getTotalUsage = (devices: Array<Device>, scale: Scale = 1): number => {
    return devices.reduce((acc, curr) => {
      const daily = this.convertWtokWh(curr.wattage);
      return acc + ((daily * curr.avgUsagePerDay) * scale);
    }, 0);
  }

  public getApplianceRates = (devices: Array<Device>) => {
    return devices.reduce((acc, curr) => {
      const data: { electricity: number;  gas: number; } = { electricity: acc.electricity, gas: acc.gas };
      if (curr.type === 'Electricity') {
        data.electricity = +data.electricity + +curr.wattage;
      } else {
        data.gas = data.gas + curr.wattage;
      }
      return data;
    }, { electricity: 0, gas: 0 });
  }

  public getEstimateFor = (generator: () => Array<string>, scale: Scale, devices: Array<Device>): Array<any> => {
    const xScale: Array<string> = generator();
    const total = this.getTotalUsage(devices, scale);
    const estimates = [];
    for (let i = 0; i < xScale.length; i++) {
      const date = xScale[i];
      const estimate = i === 0 ? (+total / xScale.length) : estimates[i - 1].estimate + (+total / xScale.length);
      estimates.push({ date, estimate });
    }
    return estimates;
  }

  public getEstimatedPriceFor = (scale: Scale, kWh: number) => {
    return (kWh * this.AVERAGE_UK_PRICE) * scale;
  }

  public generateHistoricalUsage = (max: number = 100, min: number = 0, days: number = 365): Array<number> => {
    const historicalData = [];
    for (let i = 0; i < days; i++) {
      historicalData.push(Math.random() * (max - min) + min);
    }
    return historicalData;
  }

}
