import { Component, ViewEncapsulation } from '@angular/core';
import { UserService } from '../user/services/user.service';
import { ProductService } from '../product/Services/product.service';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

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
  page: number = 1;
  pageSize: number = 4;
  total: number = 0;

   // products variables
   prodPage: number = 1;
   prodPageSize: number = 4;
   prodTotal: number = 0;
  constructor(private _user: UserService,private _product: ProductService) {}
  ngOnInit() {
    this.fetchUsers();
    this.fetchProducts()
  }

  fetchUsers() {
    this._user.fetchUsers(this.page, this.pageSize).subscribe(
      (res: any) => {
        this.total = res.meta.itemCount;
        this.userTableHeader = res.data.map((item: any) => {
          let { id, email, username, phone_no } = item;
          return {
            id,
            email,
            username,
            phone_no,
          };
        });
       
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  fetchProducts() {
    this._product.fetchProducts(this.prodPage, this.prodPageSize).subscribe(
      (res: any) => {
        this.prodTotal = res.meta.itemCount;
        this.productTableData = res.data.map((item: any) => {
          let { image, ...others } = item;
          return others;
        });
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  productTableData:Array<{
    id: number;
    title: string;
    description: string;
    categoryId: number;
    price: number;
  }>= [];
  userTableHeader: Array<{
    id: string;
    username: string;
    email: string;
    phone_no: string;
  }> = [];

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
    series: [
      {
        name: 'Series 1',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    chart: {
      height: 300,
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
        stops: [0, 120, 100],
      },
      colors: ['#000000'],
    },
  };
  recievePageData(data: any) {
    this.page = data.page + 1;
    this.fetchUsers();
  }
  recieveProdPageData(data: any) {
    this.prodPage = data.page + 1;
    this.fetchProducts();
  }
}
