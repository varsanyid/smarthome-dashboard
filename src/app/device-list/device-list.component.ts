import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../device-storage.service';
import { Device } from '../device';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  constructor(private deviceStorageService: LocalStorageService) { }

  devices: Array<Device> = []; 

  ngOnInit() {
    this.devices = this.deviceStorageService.getDevices();
  }

}
