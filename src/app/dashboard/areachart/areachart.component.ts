import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-areachart',
  templateUrl: './areachart.component.html',
  styleUrls: ['./areachart.component.css']
})
export class AreachartComponent {

  @Input() data: string;

  view: any[] = [400, 300];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = true;
  showYAxisLabel = true;
  yAxisLabel = 'kWh';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;


}
