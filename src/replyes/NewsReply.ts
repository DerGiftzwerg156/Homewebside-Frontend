import {News} from "../entitys/News";
import {Reply} from "./Reply";

export class NewsReply {
  news: News[];
  reply: Reply;


  constructor(news: News[], reply: Reply) {
    this.news = news;
    this.reply = reply;
  }
}
