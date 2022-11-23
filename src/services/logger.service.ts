import { Injectable } from '@angular/core';
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private messageService:MessageService) { }

  log(action: string , data: any){
    console.log("Log." + action + ": Status: " + data.status + " | Message: " + data.message);
  }

  showError(summary: string, message: string) {
    this.messageService.add({key: 'messager', severity: 'error', summary: summary, detail: message});
  }

  showSuccess(summary:string, message:string){
    this.messageService.add({key: 'messager', severity: 'success', summary: summary, detail: message});
  }

  showInfo(summary:string,message:string){
    this.messageService.add({key: 'messager', severity: 'info', summary: summary, detail: message});
  }

  showWarn(summary:string,message:string){
    this.messageService.add({key: 'messager', severity: 'warn', summary: summary, detail: message});
  }
}
