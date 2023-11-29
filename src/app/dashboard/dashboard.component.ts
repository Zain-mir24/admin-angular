import { Component,ViewEncapsulation } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None, // Try changing this to None
})
export class DashboardComponent {

  constructor(){

  }
  monthOrder: any = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };
 chartOptions: any = {
    series : [
      {
        name: 'Series 1',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      },
    ],
    chart: {
      toolbar: {
        show: false,
      },
    },

    stroke: {
      show: true,
      colors: ['black'],
    },
    markers: {
      colors: ['#212121'],
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
    },
    yaxis: {
      labels: {
        formatter: function (value: any) {
          return `20k`;
        },
      },
    },

    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.2,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
      colors: ['#000000'],
    },
  };
}
