import {Injectable} from '@angular/core';
import {LoggerService} from "./logger.service";
import {HttpClient} from "@angular/common/http";
import {ProductsReply} from "../replyes/ProductsReply";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // url: string = window.location.origin+"/api/products"
  url: string = "http://localhost:8080/api/products"

  constructor(private logger: LoggerService, private http: HttpClient) {
  }

  getAllProducts() {
    return this.http.get<ProductsReply>(this.url + "/getAll");
  }
}
