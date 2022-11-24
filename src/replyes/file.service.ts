import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SingleFileReply} from "./SingleFileReply";
import {SingleFileRequest} from "../requestTypes/SingleFileRequest";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  // standardUrl: string = window.location.origin + "/api/files"
  standardUrl: string = "http://localhost:8080/api/files"

  constructor(private http: HttpClient) {
  }

  getPictureByFileName(fileName: string) {
    return this.http.post<SingleFileReply>(this.standardUrl + "/getFileByFileName", new SingleFileRequest(fileName));
  }
}
