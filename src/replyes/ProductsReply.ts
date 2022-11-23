import {Product} from "../entitys/Product";
import {Reply} from "./Reply";

export class ProductsReply {
  products: Product[]
  reply: Reply


  constructor(products: Product[], reply: Reply) {
    this.products = products;
    this.reply = reply;
  }
}
