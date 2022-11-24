export class News {
  newsId: number;
  newsTitle: string;
  newsText: string;
  pictureName: string;
  releaseDate: Date;


  constructor(newsId: number, newsTitle: string, newsText: string, pictureName: string, releaseDate: Date) {
    this.newsId = newsId;
    this.newsTitle = newsTitle;
    this.newsText = newsText;
    this.pictureName = pictureName;
    this.releaseDate = releaseDate;
  }
}
