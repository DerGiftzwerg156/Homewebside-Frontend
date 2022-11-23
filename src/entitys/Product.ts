export class Product {

  productId: number | null;
  productName: string | null;
  productDescription: string | null;
  productPrice: number | null;
  productSize: string | null;
  productPicture: string | null;


  constructor(productId: number | null, productName: string | null, productDescription: string | null, productPrice: number | null, productSize: string | null, productPicture: string | null) {
    this.productId = productId;
    this.productName = productName;
    this.productDescription = productDescription;
    this.productPrice = productPrice;
    this.productSize = productSize;
    this.productPicture = productPicture;
  }
}
