import {Component, OnInit} from '@angular/core';
import {News} from "../../../entitys/News";
import {NewsService} from "../../../services/news.service";
import {LoggerService} from "../../../services/logger.service";
import {FileService} from "../../../replyes/file.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news!: News[];
  files!: any[];

  constructor(private newsService: NewsService, private logger: LoggerService, private fileService: FileService) {
  }

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe(res => {
        if (res.reply.status) {
          this.news = res.news;
          for (let i = 0; i < this.news.length; i++) {
            console.log(this.news[i].releaseDate.getTime())
          }
        } else {
          this.logger.showError("Fehler", "Bitte kommen sie später wieder.")
        }
      }
    )
  }

}
