import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  products: Product[] = [];

  constructor(
    private productService: ProductService
  ){}



  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (productResponse) => {
        console.log("sucess!");
        console.log(productResponse);
        this.products = productResponse.products;
      }, 
      error: (error) => {
        console.log("error");
        console.error(error);
      }
    });
  }
}
