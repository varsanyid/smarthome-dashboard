import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Device } from './device';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  DEVICE_KEY = '_devices';
  DATA_KEY = '_historical_data';

  public storeDevice = (device: Device): void => {
    const storedDevices: Array<string> = this.storage.get(this.DEVICE_KEY) || [];
    storedDevices.push(JSON.stringify(device));
    this.storage.set(this.DEVICE_KEY, storedDevices);
  }

  public getDevices = (): Array<Device> => {
    const rawDevices: Array<string> = this.storage.get(this.DEVICE_KEY) || [];
    const parsedDevices: Array<Device> = rawDevices.map(device => {
      const obj = JSON.parse(device);
      return new Device(obj.id, obj.name, obj.type, obj.wattage, obj.avgUsagePerDay);
    });
    return parsedDevices;
  }

  public storeHistoricalData = (kwhs: Array<number>): void => {
    this.storage.set(this.DATA_KEY, kwhs);
  }

}
