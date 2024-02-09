import { Component } from '@angular/core';
import { ProductService } from './Services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  page: number = 1;
  pageSize: number = 5;
  total:number=0;

  constructor(private _product: ProductService) {}


  userTableHeader:Array<{
    id: number;
    title: string;
    description: string;
    categoryId: number;
    price: number;
  }>= [];
  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this._product.fetchProducts(this.page, this.pageSize).subscribe(
      (res: any) => {
        this.total = res.meta.itemCount;
        this.userTableHeader = res.data.map((item: any) => {
          let { image, ...others } = item;
          return others;
        });
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  recievePageData(data: any) {
    this.page = data.page+1;
    this.fetchProducts();
  }
}
