import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoggerService} from "./logger.service";
import {NewsReply} from "../replyes/NewsReply";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  // standardUrl: string = window.location.origin + "/api/news"
  standardUrl: string = "http://localhost:8080/api/news"

  constructor(private http: HttpClient, private logger: LoggerService) {
  }

  getAllNews() {
    return this.http.get<NewsReply>(this.standardUrl + "/getAllNews")
  }

  getLastNews() {
    return this.http.get<NewsReply>(this.standardUrl + "/getLastNews")
  }
}
