import { Component } from '@angular/core';
import { Device } from '../device';
import { LocalStorageService } from '../device-storage.service';
import { ConsumptionService } from '../consumption/consumption.service';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.css']
})
export class DeviceFormComponent {

  constructor(
    private deviceStorageService: LocalStorageService,
    private consumptionService: ConsumptionService
  ) { }

  device = new Device(undefined, undefined, undefined, undefined, undefined);

  types = ['Gas', 'Electricity'];

  onSubmit = () => {
    this.deviceStorageService.storeDevice(this.device);
  }

  estimateDailyUsage = (wattage: number): number => {
    return wattage ? this.consumptionService.convertWtokWh(wattage) : undefined;
  }

}
