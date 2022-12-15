import {Component, OnInit} from '@angular/core';
import {LoggerService} from "../../../services/logger.service";
import {ProductService} from "../../../services/product.service";
import {NewProductRequest} from "../../../requestTypes/NewProductRequest";
import {StandardRequest} from "../../../requestTypes/StandardRequest";
import {Product} from "../../../entitys/Product";

@Component({
  selector: 'app-product-care',
  templateUrl: './product-care.component.html',
  styleUrls: ['./product-care.component.scss']
})
export class ProductCareComponent implements OnInit {
  showNewProductDialog: boolean = false;

  showConfirmDialog: boolean = false;

  newProductName: string = "";
  newProductDescription: string = "";
  newProductPrice!: number;
  newProductSize!: string;

  newProductPictureName!: string;
  products!: Product[];

  constructor(private logger: LoggerService, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.newProductName = ""
    this.newProductDescription = ""
    this.newProductPrice = 0
    this.newProductSize = ""
    this.newProductPictureName = ""
  }

  newProduct() {
    this.showNewProductDialog = true;
  }

  saveNewProduct() {
    this.products = [new Product(1, this.newProductName, this.newProductDescription, this.newProductPrice, this.newProductSize, this.newProductPictureName)]
    this.showNewProductDialog = false;
    this.showConfirmDialog = true;
  }

  storeNewProduct() {
    let newProductRequest = new NewProductRequest(this.newProductName, this.newProductDescription, this.newProductPrice, this.newProductSize, this.newProductPictureName, new StandardRequest(sessionStorage.getItem('token')!))
    this.productService.storeNewProduct(newProductRequest).subscribe(res => {
      if (res.status) {
        this.ngOnInit();
        this.showConfirmDialog = false;
      } else {
        this.logger.log("storeNewProduct", res);
        this.logger.showError("Fehler", res.message);
      }
    })
  }
}
