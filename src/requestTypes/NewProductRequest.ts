import {StandardRequest} from "./StandardRequest";

export class NewProductRequest {

  productName: string;
  productDescription: string;
  productPrice: number;
  productSize: string;
  productPictureName: string;

  standardRequest: StandardRequest;

  constructor(productName: string, productDescription: string, productPrice: number, productSize: string, productPictureName: string, standardRequest: StandardRequest) {
    this.productName = productName;
    this.productDescription = productDescription;
    this.productPrice = productPrice;
    this.productSize = productSize;
    this.productPictureName = productPictureName;
    this.standardRequest = standardRequest;
  }
}
