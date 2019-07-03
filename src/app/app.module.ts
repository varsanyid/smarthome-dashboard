import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DeviceFormComponent } from './device-form/device-form.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { LocalStorageService } from './device-storage.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PiechartComponent } from './dashboard/piechart/piechart.component';
import { BarchartComponent } from './dashboard/barchart/barchart.component';
import { LinechartComponent } from './dashboard/linechart/linechart.component';
import { AreachartComponent } from './dashboard/areachart/areachart.component';
import { PriceCalculatorComponent } from './dashboard/price-calculator/price-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DeviceFormComponent,
    DeviceListComponent,
    DashboardComponent,
    PiechartComponent,
    BarchartComponent,
    LinechartComponent,
    AreachartComponent,
    PriceCalculatorComponent
  ],
  imports: [
    BrowserModule, RouterModule, BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    StorageServiceModule,
    NgxChartsModule
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
