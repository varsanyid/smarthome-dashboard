import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceListComponent } from './device-list.component';
import { LocalStorageService } from '../device-storage.service';

describe('DeviceListComponent', () => {
  let component: DeviceListComponent;
  let fixture: ComponentFixture<DeviceListComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceListComponent ],
      providers: [
        LocalStorageService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
