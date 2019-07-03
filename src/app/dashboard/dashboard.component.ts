import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Scale } from '../consumption/scale';
import { DataProviderService } from '../provider/dataprovider.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private dataProviderService: DataProviderService){
    this.fetchChartData();
  }

  switchValues = [
    {
      name: "Daily", value: 1
    },
    {
      name: "Monthly", value: 30
    },
    {
      name: "Yearly", value: 365
    }
  ]
  
  monthlyUsage: Array<any>;
  applianceRate: Array<any>;
  estimate: Array<any>;
  price: number;

  onscaleChange = (scale: Scale): void => {
    this.fetchChartData(scale);
  }

  private fetchChartData = (scale: Scale = 1): void => {
    this.monthlyUsage = this.dataProviderService.provideAverageUsage(scale);
    this.applianceRate = this.dataProviderService.provideApplianceRate();
    this.estimate = this.dataProviderService.provideEstimate(scale);
    this.price = this.dataProviderService.providePrice(scale);
  }

}
